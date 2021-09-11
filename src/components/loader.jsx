import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLoader = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid var(--grey-color);
  border-left: 3px solid var(--point-color);
  animation: ${spin} 0.7s linear infinite;
`;

const Loader = () => {
  return (
    <Container>
      <SLoader></SLoader>
    </Container>
  );
};

export default Loader;
