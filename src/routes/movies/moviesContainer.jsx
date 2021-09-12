import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import MoviesPresenter from "./moviesPresenter";

const MoviesContainer = ({ api }) => {
  const initialState = {
    topRated: null,
    nowPlaying: null,
    upcoming: null,
    isLoading: true,
  };

  const [data, setData] = useState(initialState);

  const loadData = useCallback(async () => {
    const {
      data: { results: topRated },
    } = await api.movie.topRated();
    const {
      data: { results: nowPlaying },
    } = await api.movie.nowPlaying();
    const {
      data: { results: upcoming },
    } = await api.movie.upcoming();

    setData({
      topRated,
      nowPlaying,
      upcoming,
      isLoading: false,
    });
  }, [api]);

  useEffect(() => {
    loadData();
  }, [api, loadData]);

  return <MoviesPresenter data={data} />;
};

export default MoviesContainer;
