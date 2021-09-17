import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 250px;
  margin-bottom: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Title = styled.h1`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const Grid = styled.div`
  /* width: 100%; */
  height: 80%;
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fill, 140px);
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
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
