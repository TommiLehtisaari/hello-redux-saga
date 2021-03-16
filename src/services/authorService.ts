import axios from "axios";

import { failure, success, Try } from "../util/types";

const baseURL = "http://localhost:4000";

export type APIAuthor = {
  id: string;
  name: string;
};

export type AuhtorResponse = {
  data: APIAuthor[];
};

export const getAuthors = async (): Promise<Try<AuhtorResponse>> => {
  try {
    const response = await axios.get<AuhtorResponse>(`${baseURL}/authors`);

    return success(response.data);
  } catch (e) {
    return failure(e);
  }
};
