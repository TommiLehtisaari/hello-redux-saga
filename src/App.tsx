import styled from "@emotion/styled";
import { FunctionComponent } from "react";

import { BooksList } from "./features/books/BooksList";

const Container = styled.div({
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
  height: "100vh",
});

const App: FunctionComponent = () => (
  <Container>
    <BooksList />
    <div style={{ height: 64 }} />
  </Container>
);

export default App;
