import React, { useEffect, useState } from "react";
import HomePresenter from "./homePresenter";

const HomeContainer = ({ api }) => {
  const initialState = {
    allOfDay: null,
    allOfWeek: null,
    movieOfDay: null,
    movieOfWeek: null,
    tvOfDay: null,
    tvOfWeek: null,
    isLoading: true,
  };

  const [data, setData] = useState(initialState);

  const loadData = async () => {
    const allOfDay = await api.trending.allOfDay();
    const allOfWeek = await api.trending.allOfWeek();
    const movieOfDay = await api.trending.movieOfDay();
    const movieOfWeek = await api.trending.movieOfWeek();
    const tvOfDay = await api.trending.tvOfDay();
    const tvOfWeek = await api.trending.tvOfWeek();
    setData({
      allOfDay,
      allOfWeek,
      movieOfDay,
      movieOfWeek,
      tvOfDay,
      tvOfWeek,
      isLoading: false,
    });
  };

  useEffect(() => {
    loadData();
  }, [api]);

  return <HomePresenter />;
};

export default HomeContainer;
