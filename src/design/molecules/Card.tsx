import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

const Container = styled(motion.div)({
  border: "solid #ffffff77",
  borderWidth: 2,
  borderRadius: 8,
  padding: "16px 8px",
  marginBottom: 16,
  background: `linear-gradient(
    to right bottom,
    rgba(255,255,255,0.66),
    rgba(255,255,255,0.22)
    )`,
  boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)`,
});

const Title = styled.div({
  fontWeight: "bold",
  fontSize: 20,
  marginBottom: 8,
});

const SubTitle = styled.div({
  color: "#777",
});

type Props = {
  title: string;
  subtitle: string;
  onClick?: () => void;
};

export const Card: FunctionComponent<Props> = ({
  title,
  subtitle,
  onClick,
}) => (
  <Container
    key="card"
    layout
    initial={{
      opacity: 0,
      scale: 0,
      y: -15,
    }}
    animate={{
      opacity: 1,
      scale: 1,
      y: 0,
    }}
    exit={{
      opacity: 0,
      x: 50,
      scaleX: 0.4,
    }}
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{
      scale: 0.9,
      opacity: 0.8,
      y: -5,
    }}
    onClick={onClick}
  >
    <Title>{title}</Title>
    <SubTitle>{subtitle}</SubTitle>
  </Container>
);
