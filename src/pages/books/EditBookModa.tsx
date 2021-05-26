import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent, useCallback } from "react";

import { setActiveBook } from "../../state/ducks/booksSlice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";

import { useOutsideClick } from "./useOutsideClick";

const Overlay = styled(motion.div)({
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "#00000066",
});

const ModalContainer = styled(motion.div)({
  position: "relative",
  width: 800,
  height: 700,
  border: "solid 1px #fff",
  borderRadius: 8,
  backgroundColor: "#ffffffdd",
  zIndex: 5,
});

export const EditBookModa: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { activeBook } = useAppSelector((state) => state.books);

  const handleExit = useCallback(() => {
    dispatch(setActiveBook(undefined));
  }, [dispatch]);

  const ref = useOutsideClick<HTMLDivElement>(handleExit);

  return (
    <AnimatePresence>
      {activeBook && (
        <Overlay>
          <ModalContainer
            key="editbookmodal"
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.3,
              },
            }}
            ref={ref}
          ></ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
