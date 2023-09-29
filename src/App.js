import React, {useState, useEffect} from "react";
import "./App.scss";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./navbar/nav";
import News from "./news/news";
import Blog from "./blog/blog";
import NewsDetails from "./news-details/newsDetails";
import Movies from "./movies/movies";

function App() {
  const initialAppState = JSON.parse(localStorage.getItem("appState")) || {
    comments: [],
  };

  const [appState, setAppState] = useState(initialAppState);

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(appState));
  }, [appState]);

  const handleCommentSubmit = (newComment) => {
    setAppState((prevState) => ({
      ...prevState,
      comments: [...prevState.comments, newComment],
    }));
  };

  const handleDeleteComment = (commentId) => {
    setAppState((prevState) => ({
      ...prevState,
      comments: prevState.comments.filter(
        (comment) => comment.id !== commentId
      ),
    }));
  };

  return (
    <div className="app-container">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<News />} />
          <Route
            path="/news-details/:index"
            element={
              <>
                <NewsDetails />

                <Blog
                  onCommentSubmit={handleCommentSubmit}
                  comments={appState.comments}
                  onDeleteComment={handleDeleteComment}
                />
              </>
            }
          />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
