import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import DetailPresenter from "./detailPresenter";

const DetailContainer = ({ api }) => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const history = useHistory();

  const isMovie = pathname.includes("movies") ? true : false;

  const initialState = {
    result: null,
    isLoading: true,
  };

  const [data, setData] = useState(initialState);

  const loadData = useCallback(async () => {
    try {
      let result = null;
      const parsedId = parseInt(id);
      if (isMovie) {
        ({ data: result } = await api.movie.detail(parsedId));
      } else {
        ({ data: result } = await api.tv.detail(parsedId));
      }
      setData({ result, isLoading: false });
    } catch {
      history.push("/");
    }
  }, [api, id, isMovie, history]);

  useEffect(() => {
    loadData();
  }, [api, loadData]);

  return <DetailPresenter data={data} />;
};

export default DetailContainer;
