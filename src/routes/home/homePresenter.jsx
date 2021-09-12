import React from "react";
import styled from "styled-components";
import Loader from "../../components/loader";
import Poster from "../../components/poster";
import Section from "../../components/section";

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const HomePresenter = ({
  data: {
    isLoading,
    allOfDay,
    allOfWeek,
    movieOfDay,
    movieOfWeek,
    tvOfDay,
    tvOfWeek,
  },
}) => {
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Section title="일간 인기 콘텐츠">
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
          <Section title="주간 인기 콘텐츠">
            {allOfWeek.map((item) => (
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
          <Section title="일간 인기 영화">
            {movieOfDay.map((item) => (
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
          <Section title="주간 인기 영화">
            {movieOfWeek.map((item) => (
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
          <Section title="일간 인기 TV프로그램">
            {tvOfDay.map((item) => (
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
          <Section title="주간 인기 TV프로그램">
            {tvOfWeek.map((item) => (
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

export default HomePresenter;
