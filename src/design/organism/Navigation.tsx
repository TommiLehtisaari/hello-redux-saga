import styled from "@emotion/styled";
import { AnimateSharedLayout, motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { colors } from "..";
import { sitemap } from "../../App";

const Container = styled(motion.div)({
  display: "flex",
  flexDirection: "row",
  margin: 80,
});

const ButtonContainer = styled(motion.div)({
  position: "relative",
});

const Spacer = styled(motion.div)({
  width: 24,
  height: 24,
});

const NavigationButton = styled(motion.button)(
  {
    background: "none",
    border: "none",
    outline: "none",
    color: colors.white,
    fontSize: 36,
    padding: 0,
  },
  (props: { isActive?: boolean; color?: string }) =>
    props.color && props.isActive && { color: props.color },
);

const Underline = styled(motion.div)({
  background: colors.white,
  width: "100%",
  height: 8,
  borderRadius: 4,

  position: "absolute",
  bottom: -16,
});

export const Navigation: FunctionComponent = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Container>
      <AnimateSharedLayout>
        {sitemap.map((page, index) => (
          <React.Fragment key={index}>
            <ButtonContainer>
              <NavigationButton
                isActive={page.url === location.pathname}
                color={page.color}
                onClick={() => history.push(page.url)}
              >
                {page.label}
              </NavigationButton>
              {page.url === location.pathname && (
                <Underline
                  layoutId="underline"
                  animate={{
                    backgroundColor: page.color,
                  }}
                  transition={{
                    duration: 1,
                  }}
                />
              )}
            </ButtonContainer>
            <Spacer />
          </React.Fragment>
        ))}
      </AnimateSharedLayout>
    </Container>
  );
};
