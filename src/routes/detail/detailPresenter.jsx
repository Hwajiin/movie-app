import React from "react";
import styled from "styled-components";
import Loader from "../../components/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Video from "../../components/video";
import VideoSection from "../../components/videoSection";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-position: center;
`;

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 50px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), 70%, transparent);
`;

const DetailItem = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 50px;
`;

const DetailPoster = styled.div`
  width: 220px;
  height: 300px;
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-position: center;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const MetaData = styled.div`
  align-self: flex-end;
  margin-left: 20px;
`;

const Title = styled.h1`
  font-size: ${(props) => (props.length < 10 ? "1.5rem" : "1.2rem")};
  font-weight: 600;
  text-transform: uppercase;
`;

const Average = styled.p`
  margin: 7px 0;
  font-size: 13px;
`;

const Year = styled.p`
  margin-bottom: 7px;
  font-size: 13px;
`;

const Runtime = styled.p`
  font-size: 13px;
  margin-bottom: 10px;
`;

const Genres = styled.ul`
  display: flex;
`;

const Genre = styled.li`
  opacity: 0.8;
  font-size: 13px;
  margin-right: 15px;
  border: 1px solid var(--white-color);
  padding: 5px 10px;
  border-radius: 3px;
`;

const Overview = styled.p`
  font-size: 13px;
  opacity: 0.8;
`;

const SVideo = styled.div`
  width: 230px;
  height: 100%;
`;

const DetailPresenter = ({ data: { result, isLoading } }) => {
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Backdrop
          path={`https://image.tmdb.org/t/p/original${
            result.backdrop_path ? result.backdrop_path : result.poster_path
          }`}
        >
          <DetailContainer>
            <DetailItem>
              <DetailPoster
                path={`https://image.tmdb.org/t/p/original${result.poster_path}`}
              ></DetailPoster>
              <MetaData>
                <Title
                  length={
                    result.original_title
                      ? result.original_title.length
                      : result.original_name.length
                  }
                >
                  {result.original_title
                    ? result.original_title
                    : result.original_name}
                </Title>
                <Average>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#fbc531", marginRight: "10px" }}
                  />
                  {result.vote_average}
                </Average>
                <Year>
                  {result.release_date
                    ? result.release_date.slice(0, 4)
                    : result.last_air_date.slice(0, 4)}
                </Year>
                <Runtime>
                  Runtime:{" "}
                  {result.runtime ? result.runtime : result.episode_run_time}분
                </Runtime>
                <Genres>
                  {result.genres.map((genre, index) => (
                    <Genre key={index}>{genre.name}</Genre>
                  ))}
                </Genres>
              </MetaData>
            </DetailItem>
            <Overview>{result.overview}</Overview>
            <VideoSection>
              {result.videos &&
                result.videos.results.map((result, index) => (
                  <SVideo key={index}>
                    <Video id={result.key} />
                  </SVideo>
                ))}
            </VideoSection>
          </DetailContainer>
        </Backdrop>
      )}
    </Container>
  );
};

export default DetailPresenter;
