import faker from "faker";
import React, { FunctionComponent } from "react";

import { AppButton } from "../../design/atoms/Button";
import { useAppDispatch } from "../../hooks";
import { addBook, createBook } from "../../state/ducks/booksSlice";

export const BookForm: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    dispatch(
      createBook({
        title: faker.commerce.productName(),
        authorId: faker.name.findName(),
      }),
    );

    dispatch(
      addBook({
        id: faker.random.uuid(),
        title: faker.commerce.productName(),
        author: {
          id: faker.random.uuid(),
          name: faker.name.findName(),
        },
      }),
    );
  };

  return <AppButton onClick={(e) => handleSubmit(e)}>Create Book</AppButton>;
};
