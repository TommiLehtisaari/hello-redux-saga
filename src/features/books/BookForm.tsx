import faker from "faker";
import React, { FunctionComponent } from "react";

import { AppButton } from "../../design/atoms/Button";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { createBook } from "../../state/ducks/booksSlice";

export const BookForm: FunctionComponent = () => {
  const { authors } = useAppSelector((state) => state.authors);
  const dispatch = useAppDispatch();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    if (authors.length === 0) {
      return;
    }

    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];

    dispatch(
      createBook({
        title: faker.commerce.productName(),
        author: {
          id: randomAuthor.id,
          name: randomAuthor.name,
        },
      }),
    );
  };

  return <AppButton onClick={(e) => handleSubmit(e)}>Create Book</AppButton>;
};
