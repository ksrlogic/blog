import React from "react";
import { Button } from "react-bootstrap";
const CreatePage = () => {
  return (
    <>
      <form method="POST" action="/api/create_post">
        <input
          placeholder="제목"
          className="title"
          name="title"
          type="text"
          maxLength="100"
        ></input>
        <textarea
          placeholder="내용"
          className="description"
          name="description"
          maxLength="10000"
        ></textarea>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default CreatePage;
