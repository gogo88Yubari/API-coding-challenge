import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

import classes from './App.css';
import GridBuild from './containers/GridBuild/GridBuild';
import ListBuild from "./containers/ListBuild/ListBuild"
import MapBuild from "./containers/MapBuild/MapBuild";


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header>
          <ul>
            <li><NavLink
              to="/"
              exact
              activeClassName="activeStyle"
              activeStyle={{ color: "white" }}>LINK</NavLink></li>
            <li><NavLink
              to="/grid"
              exact
              activeClassName="activeStyle"
              activeStyle={{ color: "white" }}>GRID</NavLink></li>
            <li><NavLink
              to="/map"
              exact
              activeClassName="activeStyle"
              activeStyle={{ color: "white" }}>MAP</NavLink></li>
          </ul>
        </header>
        <Route path="/" exact component={ListBuild} />
        <Route path="/grid" component={GridBuild} />
        <Route path="/map" component={MapBuild} />
      </div >
    );
  }
}

export default App;
