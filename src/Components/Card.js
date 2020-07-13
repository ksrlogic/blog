import React from "react";

const CardPage = () => {
  return (
    <div className="blogCard">
      <div className="Media-Image">
        <img alt="Gallery" className="CardImage" src="./Sample.PNG" />
      </div>
      <div className="Media-component">
        <h2>Title</h2>
        <span>Published 2 days ago</span>
        <span>5 min read</span>
        <span>8 comments</span>
        <h3>
          Velit do ea cillum deserunt esse dolore reprehenderit dolore elit
          eiusmod commodo pariatur fugiat commodo. Lorem consequat eiusmod quis
          ex eiusmod in laboris cillum ullamco proident et culpa Lorem. Lorem
          Lorem aute nulla velit eiusmod sunt consequat.
        </h3>
      </div>
    </div>
  );
};

export default CardPage;
