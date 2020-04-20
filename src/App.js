import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';

import Home from './Home'
import Html from './Html'
import Css from './Css.js'
import Js from './Js'

import "./style.css"


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navBar">
            <li>
              <NavLink activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/html">HTML</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/css">CSS</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/js">JS</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/html">
            <Html/>
          </Route>
          <Route exact path="/css" >
            <Css />
          </Route>/>
          <Route exact path="/js" >
            <Js />
          </Route>/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
