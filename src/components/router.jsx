import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../routes/home";
import Movies from "../routes/movies";
import TV from "../routes/tv";
import Search from "../routes/search";
import Detail from "../routes/detail";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/:id" component={Detail} />
        <Redirect path="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
