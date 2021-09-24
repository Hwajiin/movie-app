import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useHistory } from "react-router";
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
  const history = useHistory();

  const loadData = useCallback(async () => {
    try {
      const {
        data: { results: allOfDay },
      } = await api.trending.allOfDay();
      const {
        data: { results: allOfWeek },
      } = await api.trending.allOfWeek();
      const {
        data: { results: movieOfDay },
      } = await api.trending.movieOfDay();
      const {
        data: { results: movieOfWeek },
      } = await api.trending.movieOfWeek();
      const {
        data: { results: tvOfDay },
      } = await api.trending.tvOfDay();
      const {
        data: { results: tvOfWeek },
      } = await api.trending.tvOfWeek();
      setData({
        allOfDay,
        allOfWeek,
        movieOfDay,
        movieOfWeek,
        tvOfDay,
        tvOfWeek,
        isLoading: false,
      });
    } catch {
      history.push("/");
    }
  }, [api, history]);

  useEffect(() => {
    loadData();
  }, [api, loadData]);

  return <HomePresenter data={data} />;
};

export default HomeContainer;
