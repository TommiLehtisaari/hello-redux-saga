import { call, put } from "redux-saga/effects";

import { APIAuthor, getAuthors } from "../../services/authorService";
import { Try } from "../../util/types";
import { fetchAuthorsFailure, fetchAuthorsSuccess } from "../ducks/authorSlice";

export const fetchAuthorsSaga = function* (): Generator {
  const response = yield call(getAuthors);
  const authorResponse = response as Try<APIAuthor[]>;

  if (authorResponse.success) {
    yield put(fetchAuthorsSuccess(authorResponse.value));
  } else {
    yield put(fetchAuthorsFailure());
  }
};
