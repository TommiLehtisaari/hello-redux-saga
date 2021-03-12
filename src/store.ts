import { configureStore } from "@reduxjs/toolkit";

import { booksReducer } from "./features/books/booksSlice";
import counterReducer from "./features/counter/counterSlicer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
