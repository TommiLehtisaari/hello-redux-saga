import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Book } from "../../model";
import { APIBook } from "../../services/bookService";
import { RootState } from "../../store";

// Define a type for the slice state
type BooksState = {
  books: Book[];
  loading: boolean;
  error: undefined | string;
};

// Define the initial state using that type
const initialState: BooksState = {
  books: [],
  loading: false,
  error: undefined,
};

export const bookSlice = createSlice({
  name: "book",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchBooks: (state) => {
      state.loading = true;
    },
    fetchBooksSuccess: (state, action: PayloadAction<APIBook[]>) => {
      state.books = action.payload;
      state.error = undefined;
      state.loading = false;
    },
    fetchBooksFailure: (state) => {
      state.error = "Fetch failed";
      state.loading = false;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.books = [...state.books, action.payload];
    },
    setBookLoadingState: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  addBook,
  fetchBooks,
  setBookLoadingState,
  fetchBooksSuccess,
  fetchBooksFailure,
} = bookSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBooks = (state: RootState): Book[] => state.books.books;

export const booksReducer = bookSlice.reducer;
