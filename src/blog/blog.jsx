import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import "./blog.scss";
import CommentList from "./comment-list/commentList";
import {v4 as uuidv4} from "uuid";

const Blog = ({onCommentSubmit, comments, onDeleteComment}) => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      const index = location.pathname.split("/")[2];

      const newComment = {
        id: uuidv4(),
        name: name,
        comment: comment,
        index: index,
      };
      onCommentSubmit(newComment);
      setName("");
      setComment("");
    }
  };

  const handleTextAreaKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <div className="blog-container">
      <h1>Leave a Comment</h1>
      <form onSubmit={handleSubmit}>
        <label className="name" htmlFor="name">
          Your Name:
        </label>
        <input
          className="input-name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label className="comment" htmlFor="comment">
          Your Comment:
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="5"
          cols="50"
          onKeyPress={handleTextAreaKeyPress}
          required
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>

      <CommentList
        comments={comments}
        currentIndex={location.pathname.split("/")[2]}
        onDeleteComment={onDeleteComment}
      />
    </div>
  );
};

export default Blog;
