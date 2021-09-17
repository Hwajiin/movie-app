import React from "react";
import styled from "styled-components";

const Container = styled.section`
  margin-top: 20px;
  width: 100%;
  height: 160px;
  display: grid;
  grid-gap: 15px;
  /* background-color: rgba(0, 0, 0, 0.5); */
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, 230px);
  overflow-x: scroll;
  border-radius: 5px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const VideoSection = ({ children }) => {
  return <Container>{children}</Container>;
};

export default VideoSection;
