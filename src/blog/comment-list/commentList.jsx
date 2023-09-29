import React from "react";
import "./commentList.scss";

const CommentList = ({comments = [], currentIndex, onDeleteComment}) => {
  if (!Array.isArray(comments)) {
    return null;
  }

  const filteredComments = comments.filter(
    (comment) => comment.index === currentIndex
  );

  return (
    <div>
      <ul>
        <h2>Comments</h2>
        {filteredComments.map((comment, index) => (
          <li key={index} className="comment-list">
            <strong>{comment.name}*</strong> <p>{comment.comment}</p>
            <span onClick={() => onDeleteComment(comment.id)}>X</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
