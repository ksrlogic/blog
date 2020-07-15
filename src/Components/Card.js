import React from "react";
import { Link } from "react-router-dom";

const CardPage = ({ id, description, createdAt, title }) => {
  return (
    <div className="blogCard">
      <div className="Media-Image">
        <img alt="Gallery" className="CardImage" src="./Sample.PNG" />
      </div>
      <div className="Media-component">
        <h2>
          <Link className="titleLink" to={`/post/${id}`}>
            {title}
          </Link>
        </h2>
        <span>{createdAt}</span>
        <span>5 min read</span>
        <span className="fspan">8 comments</span>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default CardPage;
