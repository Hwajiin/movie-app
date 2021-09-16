import React from "react";
import styled from "styled-components";
import Loader from "../../components/loader";
import Poster from "../../components/poster";
import Section from "../../components/section";

const Container = styled.div`
  width: 100%;
  padding: 70px 20px;
`;

const MoviesPresenter = ({
  data: { topRated, nowPlaying, upcoming, isLoading },
}) => {
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Section title="TOP 20 영화">
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
          <Section title="상영 중인 영화">
            {nowPlaying.map((item) => (
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
          <Section title="상영 예정 영화">
            {upcoming.map((item) => (
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

export default MoviesPresenter;
