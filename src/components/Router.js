import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "../screens/Home";
import Shows from "../screens/Shows";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Detail from "../screens/Detail";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shows" exact component={Shows} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default Router;
