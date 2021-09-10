import React from "react";
import { useState } from "react";
import SearchPresenter from "./searchPresenter";

const SearchContainer = ({ api }) => {
  const initialState = {
    isLoading: true,
  };
  const [data, setData] = useState(initialState);
  return <SearchPresenter />;
};

export default SearchContainer;
