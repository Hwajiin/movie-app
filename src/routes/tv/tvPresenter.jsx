import React from "react";
import styled from "styled-components";
import Loader from "../../components/loader";
import Poster from "../../components/poster";
import Section from "../../components/section";

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const TvPresenter = ({
  data: { topRated, popular, airingToday, isLoading },
}) => {
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Section title="TOP 20 TV 프로그램">
            {topRated.map((item) => (
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
          <Section title="오늘 방영할 TV 프로그램">
            {airingToday.map((item) => (
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
          <Section title="인기 TV 프로그램">
            {popular.map((item) => (
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
        </>
      )}
    </Container>
  );
};

export default TvPresenter;
