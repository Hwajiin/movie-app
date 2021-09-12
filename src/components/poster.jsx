import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

const Container = styled.div`
  width: 140px;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.poster});
  background-position: center;
  background-size: cover;
  position: relative;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  padding-bottom: 5px;
  background: linear-gradient(rgba(255, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8) 95%);
`;

const Title = styled.span`
  font-size: 13px;
`;

const Poster = ({ title, poster, id, isMovie = true }) => {
  const poster_url = `https://image.tmdb.org/t/p/original${poster}`;
  return (
    <SLink
      to={{
        pathname: `/${id}`,
        state: `${isMovie ? "movie" : "tv"}`,
      }}
    >
      <Container>
        <ImageContainer poster={poster_url}>
          <TitleBox>
            <Title>
              {title.length <= 15 ? title : `${title.slice(0, 14)}...`}
            </Title>
          </TitleBox>
        </ImageContainer>
      </Container>
    </SLink>
  );
};

export default Poster;
