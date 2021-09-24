import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import TvPresenter from "./tvPresenter";

const TvContainer = ({ api }) => {
  const initialState = {
    topRated: null,
    popular: null,
    airingToday: null,
    isLoading: true,
  };

  const [data, setData] = useState(initialState);
  const history = useHistory();

  const loadData = useCallback(async () => {
    try {
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
    } catch {
      history.push("/tv");
    }
  }, [api, history]);

  useEffect(() => {
    loadData();
  }, [api, loadData]);

  return <TvPresenter data={data} />;
};

export default TvContainer;
