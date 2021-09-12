import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 250px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const Grid = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: repeat(auto-fit, 125px);
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
