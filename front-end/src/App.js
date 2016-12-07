import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css';
import Welcome from './components/welcome'
import logoutUser from './actions/logoutUser'

class App extends Component {
  constructor(){
    super()
    this.state = {showWelcome: true}
    this.showWelcome = this.showWelcome.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  showWelcome() {
    this.setState({showWelcome: false})
  }

  handleLogout(){
    this.props.logoutUser()
  }

  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        handleLogout: this.handleLogout
      })
    })

    return (
      <div className="App">
        <div className="container">
          <h1>DayJams</h1>
        {this.state.showWelcome ? <Welcome showWelcome={this.showWelcome}/> : null}
        {childrenWithExtraProp}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logoutUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
