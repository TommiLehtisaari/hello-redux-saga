import { all, takeEvery, takeLatest } from "redux-saga/effects";

import { fetchAuthors } from "../ducks/authorSlice";
import {
  fetchBooks as fetchBooksAction,
  createBook as createBookAction,
} from "../ducks/booksSlice";

import { fetchAuthorsSaga } from "./authorSaga";
import { createBookSaga, fetchBooksSaga } from "./bookSaga";

export const rootSaga = function* (): Generator {
  yield all([
    yield takeLatest(fetchBooksAction.type, fetchBooksSaga),
    yield takeEvery(createBookAction.type, createBookSaga),
    yield takeEvery(fetchAuthors.type, fetchAuthorsSaga),
  ]);
};
