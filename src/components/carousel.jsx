import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Conatainer = styled.div`
  position: relative;
  width: 100vw;
  height: 400px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Sliders = styled.ul`
  width: calc(100vw * 21);
  height: 100%;
  display: flex;
  margin-left: ${(props) => props.marginLeft};
  transition: all 1s ease-in;
`;

const Slide = styled.li`
  position: relative;
  width: 100vw;
  height: 100%;
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-position: center;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, var(--black-color), 20%, transparent);
  }
`;

const DataContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
`;

const Title = styled.p`
  text-transform: uppercase;
  opacity: 0.8;
  font-weight: 700;
  font-size: ${(props) => (props.length < 10 ? "2rem" : "1.5rem")};
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

const Average = styled.p`
  font-size: 15px;
  text-align: right;
`;

const Carousel = ({ data }) => {
  console.log(data);
  const [curSlider, setCurSlider] = useState(1);
  const curSliderRef = useRef(1);
  const [marginLeft, setMarginLeft] = useState(0);
  const marginLeftRef = useRef(0);

  const handleCarousel = () => {
    setInterval(() => {
      setCurSlider(
        curSliderRef.current === data.length
          ? (curSliderRef.current = 1)
          : (curSliderRef.current += 1)
      );
      setMarginLeft(
        curSliderRef.current === data.length
          ? (marginLeftRef.current = 0)
          : (marginLeftRef.current -= 100)
      );
    }, 10000);
  };

  useEffect(() => {
    handleCarousel();
  }, []);

  return (
    <Conatainer>
      <Sliders length={data.length} marginLeft={`${marginLeft}vw`}>
        {data.map((item) => (
          <Slide
            key={item.id}
            path={`https://image.tmdb.org/t/p/original${
              item.backdrop_path ? item.backdrop_path : item.poster_path
            }`}
          >
            <DataContainer>
              <Title
                length={
                  item.original_title
                    ? item.original_title.length
                    : item.original_name.length
                }
              >
                {item.original_title ? item.original_title : item.original_name}
              </Title>
              <Average>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#fbc531", marginRight: "10px" }}
                />
                {item.vote_average}
              </Average>
            </DataContainer>
          </Slide>
        ))}
      </Sliders>
    </Conatainer>
  );
};

export default Carousel;
