import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar";
import { AppRouter } from "./routers/AppRouter";

export const HeroesApp = () => {
  return <AppRouter />;
};
