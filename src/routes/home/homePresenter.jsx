import React from "react";
import styled from "styled-components";
import Loader from "../../components/loader";
import Poster from "../../components/poster";
import Section from "../../components/section";

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const HomePresenter = ({ data: { isLoading, allOfDay } }) => {
  console.log(allOfDay);
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Section title="오늘의 인기 콘텐츠">
          {allOfDay.map((item) => (
            <Poster
              key={item.id}
              content={item}
              id={item.id}
              title={
                item.original_title ? item.original_title : item.original_name
              }
              poster={item.poster_path}
            />
          ))}
        </Section>
      )}
    </Container>
  );
};

export default HomePresenter;
