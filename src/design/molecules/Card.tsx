import styled from "@emotion/styled";
import { FunctionComponent } from "react";

const Container = styled.div({
  border: "solid",
  borderWidth: 1,
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 16,
  paddingRight: 16,
  marginBottom: 16,
  borderRadius: 5,
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
};

export const Card: FunctionComponent<Props> = ({ title, subtitle }) => (
  <Container>
    <Title>{title}</Title>
    <SubTitle>{subtitle}</SubTitle>
  </Container>
);
