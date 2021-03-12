import styled from "@emotion/styled";
import React, { FunctionComponent, useState } from "react";

import { AppButton } from "../../design/atoms/Button";
import { useAppDispatch } from "../../hooks";

import { add } from "./booksSlice";

const Form = styled.form({
  display: "flex",
  flexDirection: "column",
});

const Input = styled.input({
  border: "solid",
  borderRadius: 5,
  borderWidth: 1,
  marginBottom: 16,
  padding: 8,
});

const Label = styled.div({
  color: "#777",
});

export const BookForm: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    if (title.length > 3 && author.length > 3) {
      dispatch(add({ title, author }));
    }

    setTitle("");
    setAuthor("");
  };

  return (
    <Form>
      <Label>Title of the book</Label>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Label>Author</Label>
      <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <AppButton onClick={(e) => handleSubmit(e)}>Create Book</AppButton>
    </Form>
  );
};
