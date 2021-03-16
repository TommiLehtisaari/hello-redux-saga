import axios from "axios";

import { failure, success, Try } from "../util/types";

const baseURL = "http://localhost:4000";

export type APIBook = {
  id: string;
  title: string;
  authorId: string;
  author: {
    id: string;
    name: string;
  };
};

export type BookResponse = {
  data: APIBook[];
};

export const getBooks = async (): Promise<Try<BookResponse>> => {
  try {
    const response = await axios.get<BookResponse>(
      `${baseURL}/books?_expand=author`,
    );

    return success(response.data);
  } catch (e) {
    return failure(e);
  }
};

export type APICreateBook = {
  id: string;
  authorId: string;
  name: string;
};

export type CreateBookResponse = {
  data: APICreateBook;
};

type APICreateBookInput = {
  title: string;
  authorId: string;
};

export const createBook = async ({
  title,
  authorId,
}: APICreateBookInput): Promise<Try<CreateBookResponse>> => {
  try {
    const response = await axios.post<CreateBookResponse>(`${baseURL}/books`, {
      title,
      authorId,
    });

    return success(response.data);
  } catch (e) {
    return failure(e);
  }
};
