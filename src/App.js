import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './BaseCount';
import Refs from './refs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container />
        <Refs />
      </div>
    );
  }
}

export default App;
