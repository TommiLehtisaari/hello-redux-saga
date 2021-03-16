// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";

import {
  APIBook,
  getBooks,
  createBook,
  APICreateBook,
} from "../../services/bookService";
import { Try } from "../../util/types";
import {
  BookInput,
  createBookFailed,
  createBookSuccess,
  fetchBooksFailure,
  fetchBooksSuccess,
} from "../ducks/booksSlice";

export const fetchBooksSaga = function* (): Generator {
  const response = yield call(getBooks);
  const bookResponse = response as Try<APIBook[]>;

  if (bookResponse.success) {
    yield put(fetchBooksSuccess(bookResponse.value));
  } else {
    yield put(fetchBooksFailure());
  }
};

export const createBookSaga = function* (
  action: PayloadAction<BookInput>,
): Generator {
  const { title, author } = action.payload;
  const response = yield call(createBook, { title, authorId: author.id });
  const createResponse = response as Try<APICreateBook>;

  if (createResponse.success) {
    yield put(
      createBookSuccess({
        id: createResponse.value.id,
        title,
        author,
      }),
    );
  } else {
    yield put(createBookFailed());
  }
};
