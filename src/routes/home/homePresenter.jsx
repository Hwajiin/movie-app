import React from "react";
import styled from "styled-components";
import Loader from "../../components/loader";

const Container = styled.div``;

const HomePresenter = ({ data: { isLoading, allOfDay } }) => {
  console.log(allOfDay);
  return (
    <Container>
      <Loader />
    </Container>
  );
};

export default HomePresenter;
