import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";

import { Card } from "../../design/molecules/Card";
import { useAppSelector } from "../../hooks";

const Container = styled(motion.div)({ width: 500 });

export const AuthorPage: FunctionComponent = () => {
  const { loading, authors, error } = useAppSelector((state) => state.authors);

  return (
    <Container
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
      {authors.map((author, index) => (
        <Card key={index} title={author.name} subtitle={`0 books`} />
      ))}
      {authors.length === 0 && (
        <div style={{ color: "#777" }}>The list of books is empty</div>
      )}
      {loading && <div style={{ color: "#777", padding: 32 }}>loading...</div>}
      {error && (
        <div style={{ color: "#777", padding: 32 }}>
          Fetching books failed...
        </div>
      )}
      <div style={{ height: 64 }}></div>
    </Container>
  );
};
