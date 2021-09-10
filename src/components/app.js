import React from "react";
import GlobalStyles from "./globalStyles";
import Router from "./router";

const App = () => {
  return (
    <div className="App">
      <Router />
      <GlobalStyles />
    </div>
  );
};

export default App;
