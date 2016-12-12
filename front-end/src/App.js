import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css';
import Welcome from './components/welcome'
import logoutUser from './actions/logoutUser'
import { Link } from 'react-router'

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
    this.setState({showWelcome: true})
    this.props.logoutUser()
  }

  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        handleLogout: this.handleLogout
      })
    })

    return (
      <div className="everything">
        <div className="Navbar">

          <div className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">DayJams</a>
              </div>
              <div className="nav navbar-nav navbar-right">
                <span onClick={this.props.handleLogout}><Link to={'/'} className="btn btn-success navbar-btn">SignOut</Link></span>
              </div>
            </div>
          </div>

        </div>
        <div className="App">
          <div className="the-better-container">
            <div className="jumbotron">
              <h1>DayJams</h1>
              {this.state.showWelcome ? <Welcome showWelcome={this.showWelcome}/> : null}
            </div>
            {childrenWithExtraProp}
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logoutUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
