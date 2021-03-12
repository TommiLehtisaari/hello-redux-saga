import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";

import { AppButton } from "../../design/atoms/Button";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { decrement, increment } from "./counterSlicer";

const CounterFace = styled.span({
  padding: 16,
});

export const Counter: FunctionComponent = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <AppButton
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </AppButton>
        <CounterFace>{count}</CounterFace>
        <AppButton
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </AppButton>
      </div>
    </div>
  );
};
