import styled from "@emotion/styled";
import { FunctionComponent } from "react";

import { Card } from "../../design/molecules/Card";
import { useAppSelector } from "../../hooks";

import { BookForm } from "./BookForm";

const Title = styled.h2({
  fontSize: 26,
  fontWeight: "bold",
});

const CardsRow = styled.div({
  width: 500,
});

export const BooksList: FunctionComponent = () => {
  const books = useAppSelector((state) => state.books.books);

  return (
    <CardsRow>
      <Title>List of the books</Title>
      {books.map((book, index) => (
        <Card key={index} title={book.title} subtitle={`by ${book.author}`} />
      ))}
      {books.length === 0 && (
        <div style={{ color: "#777" }}>The list of books is empty</div>
      )}
      <div style={{ height: 64 }}></div>
      <BookForm />
    </CardsRow>
  );
};
