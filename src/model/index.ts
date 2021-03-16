export type Book = {
  id: string;
  title: string;
  author: Author;
};

export type BookInput = {
  title: string;
  authorId: string;
};

export type Author = {
  id: string;
  name: string;
  books: [{ id: string; title: string }];
};
