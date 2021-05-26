import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { FunctionComponent, useCallback } from "react";

import { Card } from "../../design/molecules/Card";
import { StateBook, setActiveBook } from "../../state/ducks/booksSlice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";

const Title = styled.h2({
  fontSize: 26,
  fontWeight: "bold",
});

export const BooksList: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.books);

  const handleBookSelect = useCallback(
    (input: StateBook) => {
      dispatch(setActiveBook(input));
    },
    [dispatch],
  );

  return (
    <motion.div>
      <Title>List of the books</Title>
      {books.map((book, index) => (
        <Card
          key={index}
          onClick={() => handleBookSelect(book)}
          title={book.title}
          subtitle={`by ${book.author.name}`}
        />
      ))}
    </motion.div>
  );
};
