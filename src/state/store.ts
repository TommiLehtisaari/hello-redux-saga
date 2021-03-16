import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { authorsReducer } from "./ducks/authorSlice";
import { booksReducer } from "./ducks/booksSlice";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    books: booksReducer,
    authors: authorsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
