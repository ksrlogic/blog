import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Comment from "../Components/Comment";

const PostPage = () => {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const getData = await fetch(
        `http://localhost:3000/api/get_a_post?id=${id}`
      );
      const Data = await getData.json();
      setTitle(Data.title);
      setDescription(Data.description);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <h1 className="title PPTitle">
        {title}
        <a href={`http://localhost:3000/api/delete?id=${id}`}>
          <Button type="submit">DELETE</Button>{" "}
        </a>
      </h1>
      <h2 className="PPDescription">
        {description === "" ? "글 내용이 없습니다." : description}
      </h2>
      <Comment />
      <Comment />
      <Comment />

      <form method="POST" action={`/api/create_comment?id=${id}`}>
        <h2>Leave Comment</h2>
        <input
          className="comment_author"
          name="author"
          maxLength={10}
          placeholder="Name"
        ></input>
        <input
          className="comment_author"
          type="password"
          name="password"
          maxLength={10}
          placeholder="password"
        ></input>
        <textarea
          className="comment_input"
          name="comment"
          maxLength={400}
          placeholder="Comment"
        ></textarea>
        <Button type="submit"> Submit</Button>
      </form>
    </>
  );
};

export default PostPage;
