import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var api = require('./utils/api');

class App extends Component {
  componentDidMount() {
    api.fetchAllBoards().then(
      function(allBoards) {
        this.setState(function() {
          return {
            allBoards: allBoards
          };
        });
      }.bind(this)
    );
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
