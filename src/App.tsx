import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";
import React, { FunctionComponent, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { colors } from "./design";
import { Navigation } from "./design/organism/Navigation";
import { AuthorPage } from "./features/authors";
import { BooksList } from "./features/books/BooksList";
import { useAppDispatch } from "./hooks";
import { fetchAuthors } from "./state/ducks/authorSlice";
import { fetchBooks } from "./state/ducks/booksSlice";

const Background = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  minHeight: "100vh",
  margin: 0,
  padding: 0,
  backgroundImage:
    "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);",
});

const MainContainer = styled.div({
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
});

export const sitemap = [
  {
    url: "/",
    label: "Books",
    color: colors.lila,
    Component: BooksList,
  },
  {
    url: "/authors",
    label: "Authors",
    color: colors.amber,
    Component: AuthorPage,
  },
];

const App: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Background>
      <Router>
        <Route>
          <Navigation />
          <MainContainer>
            <AnimatePresence exitBeforeEnter>
              <Switch>
                {sitemap.map((p, i) => (
                  <Route
                    key={i}
                    exact
                    path={p.url}
                    render={() => <p.Component />}
                  />
                ))}
              </Switch>
            </AnimatePresence>
          </MainContainer>
        </Route>
      </Router>
      <div style={{ height: 64 }} />
    </Background>
  );
};

export default App;
