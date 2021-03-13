import styled from "@emotion/styled";
import { FunctionComponent } from "react";

import { BooksList } from "./features/books/BooksList";

const Container = styled.div({
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
  height: "100%",
  minHeight: "100vh",
  margin: 0,
  padding: 0,
  backgroundImage:
    "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);",
});

const App: FunctionComponent = () => (
  <Container>
    <BooksList />
    <div style={{ height: 64 }} />
  </Container>
);

export default App;
