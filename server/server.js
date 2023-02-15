const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./models/post');
const Account = require('./models/account');
const Comment = require('./models/comment');

const app = express();

const port = 5000;
const db = "mongodb+srv://tkachillia:2143658709@cluster0.haxyixx.mongodb.net/database?retryWrites=true&w=majority"

app.use(cors());
app.use(express.json());

mongoose
  .connect(db)
  .then((res) => console.log('Connect'))
  .catch((err) => console.log(err));

// app.get('/api/postList', (req, res) => {
//     res.json([
//       {
//       "id" : "1",
//       "title": "Article 1",
//       "author": "John Doe",
//       "createdAt": "2022-01-01",
//       "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, leo a ullamcorper feugiat, ante purus sodales justo, a faucibus libero lacus a est.",
//       "image": "https://picsum.photos/200"
//       },
//       {
//       "title": "Article 2",
//       "author": "Jane Doe",
//       "createdAt": "2022-02-01",
//       "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, leo a ullamcorper feugiat, ante purus sodales justo, a faucibus libero lacus a est.",
//       "image": "https://picsum.photos/200"
//       },
//       {
//       "title": "Article 3",
//       "author": "John Doe",
//       "createdAt": "2022-03-01",
//       "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, leo a ullamcorper feugiat, ante purus sodales justo, a faucibus libero lacus a est.",
//       "image": "https://picsum.photos/200"
//       },
//       {
//       "title": "Article 4",
//       "author": "Jane Doe",
//       "createdAt": "2022-04-01",
//       "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, leo a ullamcorper feugiat, ante purus sodales justo, a faucibus libero lacus a est.",
//       "image": "https://picsum.photos/200"
//       },
//       {
//       "title": "Article 5",
//       "author": "John Doe",
//       "createdAt": "2022-05-01",
//       "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, leo a ullamcorper feugiat, ante purus sodales justo, a faucibus libero lacus a est.",
//       "image": "https://picsum.photos/200"
//       },
//       {
//       "title": "Article 6",
//       "author": "Jane Doe",
//       "createdAt": "2022-06-01",
//       "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, leo a ullamcorper feugiat, ante purus sodales justo, a faucibus libero lacus a est.",
//       "image": "https://picsum.photos/200"
//       }
//     ]);
//   });

app.get('/api/postList', (req, res) => {
  Post
    .find()
    .then((posts) => res.json(posts))
    .catch((err) => res.send(err));
});

app.post('/api/postList', (req, res) => {
  const data = req.body;
  const post = new Post(data);
  post
    .save()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

app.post('/api/register', (req, res) => {
  const { name, password, status } = req.body;

  Account.findOne({ name }, (err, existingUser) => {
    if (existingUser) {
      return res.status(400).send({ error: 'User already exists' });
    }

    const user = new Account({
      name,
      password,
      status,
    });

    user.save((err) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
      res.status(201).send({ message: 'User created successfully' });
    });
  });
});


app.post('/api/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
    
    const account = await Account.findOne({ name });
    if (!account) {
      return res.status(401).json({ error: 'Incorrect username or password' });
    }

    const isMatch = (password == account.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Incorrect username or password' });
    }

    res.json({status: account.status});
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

app.get('/api/posts/:postId', (req, res) => {
  const postId = req.params.postId;

  Post.findById(postId, (err, post) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal server error');
    }
    if (!post) {
      console.log('Post not found')
      return res.status(404).send('Post not found');
    }
    
    Comment.find({ post: postId }, (err, comments) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal server error');
      }
      return res.json({ post, comments });
    });
  });
});

app.post('/api/posts/:postId/comments', async (req, res) => {
  const postId = req.params.postId;
  const { author, text } = req.body;

  console.log(postId, author, text);
  try {
    const comment = new Comment({postId, author, text});
    comment
      .save()
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});