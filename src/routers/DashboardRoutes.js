import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/marvel" component={MarvelScreen} />
        <Route exact path="/heroe/heroeId" component={HeroScreen} />
        <Route exact path="/dc" component={DcScreen} />
        <Redirect to="/marvel" />
      </Switch>
    </>
  );
};
