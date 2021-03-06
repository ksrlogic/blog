import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Comment from "../Components/Comment";
import store from "../store/index";

const PostPage = () => {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [imagesrc, setImageSrc] = useState("/Sample.PNG");
  const [comments, setComments] = useState([
    {
      author: "1234",
      comment: "1234",
      createdAt: "2020-07-15",
      id: 1,
      password: "1234",
      postid: 8,
      updatedAt: "2020-07-15",
    },
  ]);
  const fetchData = async () => {
    const getData = await fetch(`/api/get_a_post?id=${id}`);
    const Data = await getData.json();
    setTitle(Data.title);
    setDescription(Data.description);
    setAuthor(Data.author);
    setImageSrc(Data.imagePath);
  };
  const fetchComment = async () => {
    const getComments = await fetch(`/api/get_comment?id=${id}`);
    const Comments = await getComments.json();
    setComments(Comments);
  };

  useEffect(() => {
    fetchData();
    fetchComment();
  }, [id]);
  const canIDelete = (e) => {
    const currentUser = store.getState().email;
    if (currentUser !== author) {
      alert("다른사람의 글을 지울 수 없습니다!");
      e.preventDefault();
    }
  };
  return (
    <>
      <h1 className="title PPTitle">
        {title}
        <form
          onSubmit={canIDelete}
          className="deleteform"
          method="POST"
          action={`/api/delete?id=${id}`}
        >
          <Button type="submit">DELETE</Button>
          <p className="post_author">Author: {author}</p>
        </form>
      </h1>
      {imagesrc ? (
        <img
          alt="postimage"
          className="postimage"
          style={{ maxWidth: "400px" }}
          src={imagesrc}
        ></img>
      ) : null}
      <h2
        dangerouslySetInnerHTML={{ __html: description }}
        className="PPDescription"
      ></h2>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            author={comment.author}
            comment={comment.comment}
          />
        );
      })}

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
