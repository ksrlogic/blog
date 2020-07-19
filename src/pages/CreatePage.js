import React, { useState } from "react";
import { Button } from "react-bootstrap";
import store from "../store";
const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const state = store.getState();
  const blockUser = (e) => {
    if (title === "" || content === "") {
      alert("제목 또는 내용이 비어있습니다!");
      e.preventDefault();
    }
    if (!state.status) {
      alert("로그인이 필요합니다!");
      e.preventDefault();
    }
  };
  return (
    <>
      <form onSubmit={blockUser} method="POST" action="/api/create_post">
        <input
          placeholder="제목"
          className="title"
          name="title"
          type="text"
          maxLength="100"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <textarea
          placeholder="내용"
          className="description"
          name="description"
          maxLength="10000"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <input name="author" readOnly value={state.email}></input>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default CreatePage;
