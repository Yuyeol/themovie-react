import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Detail from "screens/Detail";
import Home from "screens/Home";
import MyList from "screens/MyList";
import Search from "screens/Search";
import Shows from "screens/Shows";
import Movies from "screens/Movies";

import Header from "./Header/Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/shows" exact component={Shows} />
      <Route path="/movies" exact component={Movies} />
      <Route path="/mylist" exact component={MyList} />
      <Route path="/search" exact component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/show/:id" component={Detail} />
    </HashRouter>
  );
};

export default Router;
