import React from "react";
import styled from "styled-components";
import Loader from "../../components/loader";
import Section from "../../components/section";

const Container = styled.div`
  padding: 20px;
`;

const InnerContainer = styled.div``;

const HomePresenter = ({ data: { isLoading, allOfDay } }) => {
  console.log(allOfDay);
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <InnerContainer>
          <Section title="오늘의 인기 컨텐츠">
            {allOfDay.map((item) => (
              <li>{item.original_title}</li>
            ))}
          </Section>
        </InnerContainer>
      )}
    </Container>
  );
};

export default HomePresenter;
