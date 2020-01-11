import React from "react";
import Feed from "./views/feed";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Post from "./views/post";
import Edit from "./views/edit";
import Add from "./views/add";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/add"} component={Add} />
        <Route path={"/post"} component={Post} />
        <Route path={"/edit"} component={Edit} />
        <Route path={"/"} component={Feed} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
