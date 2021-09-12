import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import TvPresenter from "./tvPresenter";

const TvContainer = ({ api }) => {
  const initialState = {
    topRated: null,
    popular: null,
    airingToday: null,
    isLoading: true,
  };

  const [data, setData] = useState(initialState);

  const loadData = useCallback(async () => {
    const {
      data: { results: topRated },
    } = await api.tv.topRated();
    const {
      data: { results: popular },
    } = await api.tv.popular();
    const {
      data: { results: airingToday },
    } = await api.tv.airingToday();

    setData({
      topRated,
      popular,
      airingToday,
      isLoading: false,
    });
  }, [api]);

  useEffect(() => {
    loadData();
  }, [api, loadData]);

  return <TvPresenter data={data} />;
};

export default TvContainer;
