import React from 'react'
import { Link } from 'react-router'

function Welcome(props) {
  return(
    <div className="jumbotron">
      <h1>DayJams</h1>
      <span onClick={props.showWelcome} className="welcome-pad"><Link to={'/signin'} className="button btn btn-success btn-lg">SignIn</Link></span>
      <span onClick={props.showWelcome} className="welcome-pad"><Link to={'/signup'} className="button btn btn-success btn-lg">SignUp</Link></span>
    </div>
  )
}

export default Welcome
