import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome'

class App extends Component {
  constructor(){
    super()
    this.state = {showWelcome: true, songResults: []}
    this.showWelcome = this.showWelcome.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  showWelcome() {
    this.setState({showWelcome: false})
  }

  handleLogout(){
    this.setState({showWelcome: true, current_user: false})
    localStorage.setItem('token', "")
  }

  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        handleLogout: this.handleLogout
      })
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>DayJams</h2>
        </div>
        {this.state.showWelcome ? <Welcome showWelcome={this.showWelcome}/> : null}
        {childrenWithExtraProp}
      </div>
    );
  }
}

export default App;
