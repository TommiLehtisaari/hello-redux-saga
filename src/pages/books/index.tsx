import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

import { useAppSelector } from "../../state/hooks";

import { BookForm } from "./BookForm";
import { BooksList } from "./BooksList";
import { EditBookModa } from "./EditBookModa";

const Container = styled(motion.div)({
  width: 500,
});

export const BooksPage: FunctionComponent = () => {
  const { loading, books, error } = useAppSelector((state) => state.books);

  return (
    <Container
      key="bookcontainer"
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
      <BooksList />
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
      <EditBookModa />
    </Container>
  );
};
