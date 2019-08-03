import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Todo from './pages/todo';

import 'antd/dist/antd.css';

export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Route path='/' component={Todo}></Route>
      </BrowserRouter>
    );
  }
}
