import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { APIAuthor } from "../../services/authorService";

type StateAuthor = {
  id: string;
  name: string;
};

// Define a type for the slice state
type AuthorState = {
  authors: StateAuthor[];
  loading: boolean;
  error: undefined | string;
};

// Define the initial state using that type
const initialState: AuthorState = {
  authors: [],
  loading: false,
  error: undefined,
};

export const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    fetchAuthors: (state) => {
      state.loading = true;
    },
    fetchAuthorsSuccess: (state, action: PayloadAction<APIAuthor[]>) => {
      state.authors = action.payload.map((a) => a);
      state.error = undefined;
      state.loading = false;
    },
    fetchAuthorsFailure: (state) => {
      state.error = "Fetch failed";
      state.loading = false;
    },
  },
});

export const {
  fetchAuthors,
  fetchAuthorsSuccess,
  fetchAuthorsFailure,
} = authorSlice.actions;

export const authorsReducer = authorSlice.reducer;
