import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import store from "../store";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("123");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const state = store.getState();
  const [sendit, setSendit] = useState();

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const blockUser = (e) => {
    if (title === "") {
      alert("제목이 비어있습니다!");
      e.preventDefault();
    }
    if (!state.status) {
      alert("로그인이 필요합니다!");
      e.preventDefault();
    }
  };

  useEffect(() => {
    setSendit(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }, [editorState, sendit]);
  return (
    <>
      <form
        onSubmit={blockUser}
        encType="multipart/form-data"
        method="POST"
        action="/api/create_post"
      >
        <input
          placeholder="제목"
          className="title"
          name="title"
          type="text"
          maxLength="100"
          value={title}
          required=""
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <Editor
          editorClassName="description"
          placeholder="내용"
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />

        <textarea
          name="description"
          style={{ display: "none" }}
          value={sendit}
        ></textarea>
        <input name="image" required="" type="file"></input>

        <input name="author" readOnly value={state.email}></input>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default CreatePage;
