import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../routes/home";
import Movies from "../routes/movies";
import TV from "../routes/tv";
import Search from "../routes/search";
import Detail from "../routes/detail";

const Router = ({ api }) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home api={api} />
        </Route>
        <Route path="/movies">
          <Movies api={api} />
        </Route>
        <Route path="/tv">
          <TV api={api} />
        </Route>
        <Route path="/search">
          <Search api={api} />
        </Route>
        <Route path="/:id" component={Detail} />
        <Redirect path="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
