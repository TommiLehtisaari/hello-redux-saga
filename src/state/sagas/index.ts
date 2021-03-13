import { takeLatest } from "redux-saga/effects";

import { fetchBooks as fetchBooksAction } from "../ducks/booksSlice";

import { fetchBooksSaga } from "./bookSaga";

export const rootSaga = function* (): Generator {
  yield takeLatest(fetchBooksAction.type, fetchBooksSaga);
};
