import React from 'react'
import { Link } from 'react-router'

function Welcome(props) {
  return(
    <div className="jumbotron">
      <h1>DayJams</h1>
      <span onClick={props.showWelcome}><Link to={'/signin'} className="button btn btn-success">SignIn</Link></span>
      <span onClick={props.showWelcome}><Link to={'/signup'} className="button btn btn-success">SignUp</Link></span>
    </div>
  )
}

export default Welcome
