import React, { useEffect, useState } from "react";
import MoviesPresenter from "./moviesPresenter";

const MoviesContainer = ({ api }) => {
  const initialState = {
    topRated: null,
    nowPlaying: null,
    upcoming: null,
    isLoading: true,
  };

  const [data, setData] = useState(initialState);

  const loadData = async () => {
    const topRated = await api.movie.topRated();
    const nowPlaying = await api.movie.nowPlaying();
    const upcoming = await api.movie.upcoming();

    setData({
      topRated,
      nowPlaying,
      upcoming,
      isLoading: false,
    });
  };

  useEffect(() => {
    loadData();
  }, [api]);
  return <MoviesPresenter />;
};

export default MoviesContainer;
