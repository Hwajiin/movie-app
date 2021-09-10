import React from "react";
import GlobalStyles from "./globalStyles";
import Router from "./router";

const App = ({ api }) => {
  return (
    <div className="App">
      <Router api={api} />
      <GlobalStyles />
    </div>
  );
};

export default App;
