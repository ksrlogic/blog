import React from "react";

const Comment = ({ author, comment }) => {
  return (
    <div className="comment_wrapper">
      <h5 className="author">{author}</h5>
      <h3 className="comment">{comment}</h3>
    </div>
  );
};

export default Comment;
