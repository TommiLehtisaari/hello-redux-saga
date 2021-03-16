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
