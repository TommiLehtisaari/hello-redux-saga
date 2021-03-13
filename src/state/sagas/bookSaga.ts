// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
import { call, put } from "redux-saga/effects";

import { APIBook, getBooks } from "../../services/bookService";
import { Try } from "../../util/types";
import { fetchBooksFailure, fetchBooksSuccess } from "../ducks/booksSlice";

export const fetchBooksSaga = function* (): Generator {
  const response = yield call(getBooks);
  const bookResponse = response as Try<APIBook[]>;

  if (bookResponse.success) {
    yield put(fetchBooksSuccess(bookResponse.value));
  } else {
    yield put(fetchBooksFailure());
  }
};
