import React from "react";
import styled from "styled-components";
import Loader from "../../components/loader";
import Video from "../../components/video";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
  /* padding: 20px; */
  background-color: tan;
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
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.3);
`;

const SVideo = styled.div`
  width: 60%;
  height: 50%;
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
            <SVideo>
              <Video id={result.videos.results[0].key} />
            </SVideo>
          </DetailContainer>
        </Backdrop>
      )}
    </Container>
  );
};

export default DetailPresenter;
