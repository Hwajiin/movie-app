import React from "react";
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

  const loadData = async () => {
    const topRated = await api.tv.topRated();
    const popular = await api.tv.popular();
    const airingToday = await api.tv.airingToday();
    setData({
      topRated,
      popular,
      airingToday,
      isLoading: false,
    });
  };

  useEffect(() => {
    loadData();
  }, [api]);
  return <TvPresenter />;
};

export default TvContainer;
