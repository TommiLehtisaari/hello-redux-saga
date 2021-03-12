import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";

type Book = {
  title: string;
  author: string;
};

// Define a type for the slice state
type BooksState = {
  books: Book[];
};

// Define the initial state using that type
const initialState: BooksState = {
  books: [],
};

export const bookSlice = createSlice({
  name: "book",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Book>) => {
      state.books = [...state.books, action.payload];
    },
  },
});

export const { add } = bookSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBooks = (state: RootState): Book[] => state.books.books;

export const booksReducer = bookSlice.reducer;
