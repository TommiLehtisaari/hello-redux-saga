import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

import { Card } from "../../design/molecules/Card";
import { useAppSelector } from "../../state/hooks";

import { BookForm } from "./BookForm";

const Title = styled.h2({
  fontSize: 26,
  fontWeight: "bold",
});

const CardsRow = styled(motion.div)({
  width: 500,
});

export const BooksList: FunctionComponent = () => {
  const { loading, books, error } = useAppSelector((state) => state.books);

  return (
    <CardsRow
      initial={{
        opacity: 0,
        x: -100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 100,
        scaleY: 0.5,
      }}
    >
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
