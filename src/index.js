import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import DinamicoComp from './ActualizandoState/DinamicoComp';
import DinamicoComp2 from './ActualizandoState/DinamicoComp2';
import InitialState from './ActualizandoState/InitialState';
import Contador from './Eventos/Contador';
import FilmArray from './Arrays/FilmArray';
import Eventos from './Eventos/Eventos';
import HoverExample from './RenderCond/HoverCondicional';
import FilmHover from './Arrays/FilmHover';
import LifeCycle from './LifeCycle/LifeCycle';
import IPAddress from './ExtData/IPAddress';
import MovieDB from './ExtData/MovieDB';
import RefsEjemplo from './Refs/RefsEjemplo';
import Navegando from './Routing/Navegando';
import Carousel from './Slider/Slider';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navegando />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
