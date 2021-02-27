import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Detail from "screens/Detail";
import Home from "screens/Home";
import Search from "screens/Search";
import Shows from "screens/Shows";
import Movies from "screens/Movies";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
    </BrowserRouter>
  );
};

export default Router;
