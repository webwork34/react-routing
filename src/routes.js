import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { CardPage } from "./pages/CardPage";
import { CardsPage } from "./pages/CardsPage";
import { HomePage } from "./pages/HomePage";
import { MainPage } from "./pages/MainPage";

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/main" exact component={MainPage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/cards" exact component={CardsPage} />
      <Route path="/cards/:id" exact component={CardsPage} />
      <Route component={() => <h1>404 Not Found</h1>} />
      {/* <Redirect to="/" /> */}
    </Switch>
  );
};
