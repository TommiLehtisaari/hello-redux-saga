import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { APIBook } from "../../services/bookService";
import { RootState } from "../store";

type StateBook = {
  id: string;
  title: string;
  author: {
    id: string;
    name: string;
  };
};

export type BookInput = {
  title: string;
  author: {
    id: string;
    name: string;
  };
};

// Define a type for the slice state
type BooksState = {
  books: StateBook[];
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
      state.books = action.payload.map((b) => b);
      state.error = undefined;
      state.loading = false;
    },
    fetchBooksFailure: (state) => {
      state.error = "Fetch failed";
      state.loading = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createBook: (state, action: PayloadAction<BookInput>) => {
      state.loading = true;
    },
    createBookSuccess: (state, action: PayloadAction<StateBook>) => {
      const books = state.books.map((b) => b);
      books.push(action.payload);
      state.books = books;
      state.loading = false;
      state.error = undefined;
    },
    createBookFailed: (state) => {
      state.error = "Book creation failed";
      state.loading = false;
    },
    addBook: (state, action: PayloadAction<StateBook>) => {
      state.books = [...state.books, action.payload];
    },
    setBookLoadingState: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  addBook,
  createBook,
  fetchBooks,
  setBookLoadingState,
  fetchBooksSuccess,
  fetchBooksFailure,
  createBookSuccess,
  createBookFailed,
} = bookSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBooks = (state: RootState): StateBook[] => state.books.books;

export const booksReducer = bookSlice.reducer;
