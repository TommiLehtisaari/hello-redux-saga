import styled from "@emotion/styled";
import { FunctionComponent } from "react";

import { AppButton } from "../../design/atoms/Button";
import { Card } from "../../design/molecules/Card";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchBooks } from "../../state/ducks/booksSlice";

import { BookForm } from "./BookForm";

const Title = styled.h2({
  fontSize: 26,
  fontWeight: "bold",
});

const CardsRow = styled.div({
  width: 500,
});

export const BooksList: FunctionComponent = () => {
  const { loading, books, error } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  return (
    <CardsRow>
      <AppButton onClick={() => dispatch(fetchBooks())}>Fetch Books</AppButton>
      <Title>List of the books</Title>
      {books.map((book, index) => (
        <Card
          key={index}
          title={book.title}
          subtitle={`by ${book.author.name}`}
        />
      ))}
      {books.length === 0 && (
        <div style={{ color: "#777" }}>The list of books is empty</div>
      )}
      {loading && <div style={{ color: "#777", padding: 32 }}>loading...</div>}
      {error && (
        <div style={{ color: "#777", padding: 32 }}>
          Fetching books failed...
        </div>
      )}
      <div style={{ height: 64 }}></div>
      <BookForm />
    </CardsRow>
  );
};
