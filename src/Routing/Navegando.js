import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import "./index.css";

import Home from "./Home";
import List from "./List";
import Contacto from "./Contacto";

export default class Navegando extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/list">Stuff</NavLink></li>
            <li><NavLink to="/contacto/oficina">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/list" component={List}/>
            <Route path="/contacto/:location" component={Contacto}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}