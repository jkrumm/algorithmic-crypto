import React, { useEffect, useState } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { Classes } from "@blueprintjs/core";
import Dashboard from "./containers/dashboard/Dashboard";
import "./App.scss";
import Header from "./components/header/Header";

export default withRouter(function App() {
  return (
    <div className={`wrapper ${Classes.DARK}`}>
      <Header />
      <main className="main-grid-container">
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
        </Switch>
      </main>
      <footer>Copyright: Johannes Krumm 2021 jokrumm@gmail.com</footer>
    </div>
  );
});
