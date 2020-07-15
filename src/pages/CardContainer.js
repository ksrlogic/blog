import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const CardContainer = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Loading",
      description: "Loading",
      createdAt: "2020-07-15T05:53:44.000Z",
      updatedAt: "2020-07-15T05:53:44.000Z",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const getData = await fetch("/api/get_post");
      const Data = await getData.json();
      await Data.reverse();
      setPosts(Data);
    };
    fetchData();
  }, []);
  return (
    <div className="CardContainer">
      {posts.map((post) => {
        return (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description.slice(0, 50) + "..."}
            createdAt={post.createdAt}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
