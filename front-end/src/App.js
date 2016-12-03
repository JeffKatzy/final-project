import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome'

class App extends Component {
  // var mainPage =
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>DayJams</h2>
        </div>
        <Welcome />
        {this.props.children}
      </div>
    );
  }
}

export default App;
