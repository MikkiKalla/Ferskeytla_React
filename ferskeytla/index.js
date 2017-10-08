import { React, Component } from 'react';
import { render, ReactDOM } from 'react-dom';
import { BreowserRouter, Route, Switch} from "react-router-dom";

import Header from './src/components/Header';
import App from "./src/components/App"

import './scss/styles.scss';



ReactDOM.render(
  <App />, 
  document.getElementById('app')
)
