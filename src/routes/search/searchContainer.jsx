import React, { useEffect, useCallback, useState } from "react";
import { useHistory } from "react-router";
import SearchPresenter from "./searchPresenter";

const useHistoryState = () => {
  const history = useHistory();
  console.log(history);
};

const SearchContainer = ({ api }) => {
  const initialState = {
    moviesResults: null,
    tvResults: null,
  };

  const [data, setData] = useState(initialState);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useHistoryState();

  const onClear = () => {
    setText("");
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    loadData();
    setLoading(false);
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };

  const loadData = useCallback(async () => {
    if (text !== "") {
      const {
        data: { results: moviesResults },
      } = await api.search.movie(text);
      const {
        data: { results: tvResults },
      } = await api.search.tv(text);
      setData({
        moviesResults,
        tvResults,
      });
    }
  }, [api, text]);

  useEffect(() => {
    loadData();
  }, [api, loadData]);

  return (
    <SearchPresenter
      data={data}
      onSubmit={onSubmit}
      isLoading={loading}
      onClear={onClear}
      onChange={onChange}
      searchTerm={text}
    />
  );
};

export default SearchContainer;
