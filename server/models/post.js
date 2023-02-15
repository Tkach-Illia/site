const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, required: false }
    }, {timestamps: true});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;