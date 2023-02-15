import './App.css';
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryPage from "./pages/gallery/GalleryPage";
import PostPage from "./pages/postPage/PostPage";
import AboutMe from "./pages/aboutMe/AboutMe";

function App() {

  return (
      <Router>
      <Header/>
        <Routes>
            <Route path={`/post/:postId`} element={<PostPage />} />
            <Route exact path="/" element={<Main />} />
            <Route exact path="/gallery" element={<GalleryPage />} />
            <Route exact path="/about" element={<AboutMe />} />
        </Routes>
      </Router>
  );
}

export default App;
