import React, { Component } from 'react';
import Login from './components/Login';
import LoginResponse from './components/LoginResponse';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Login} />
            <Route path="/login-success" component={LoginResponse} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
