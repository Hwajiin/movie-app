import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Conatainer = styled.div`
  position: relative;
  width: 100vw;
  height: 370px;
  overflow: hidden;
  margin-bottom: 20px;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, var(--black-color), 20%, transparent);
  }
`;

const Sliders = styled.ul`
  width: calc(100vw * 21);
  height: 100%;
  display: flex;
  margin-left: ${(props) => props.marginLeft};
  transition: all 1s ease-in;
`;

const Slide = styled.li`
  width: 100vw;
  height: 100%;
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-position: center;
`;

const Carousel = ({ data }) => {
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
    // handleCarousel();
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
          />
        ))}
      </Sliders>
    </Conatainer>
  );
};

export default Carousel;
