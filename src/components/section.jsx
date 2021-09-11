import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 230px;
`;

const Title = styled.h1`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const Grid = styled.ul`
  height: 80%;
  display: flex;
  overflow-x: scroll;
`;

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

export default Section;
