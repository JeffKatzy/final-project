import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome'

class App extends Component {
  constructor(){
    super()
    this.state = {showWelcome: true}
    this.showWelcome = this.showWelcome.bind(this)
  }

  showWelcome() {
    this.setState({showWelcome: false})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>DayJams</h2>
        </div>
        {this.state.showWelcome ? <Welcome showWelcome={this.showWelcome}/> : null}
        {this.props.children}
      </div>
    );
  }
}

export default App;
