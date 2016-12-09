import React from 'react'
import { Link } from 'react-router'

function Welcome(props) {
  return(
    <div id="welcome">
      <div className="row">
      <div className="four columns offset-by-four">
        <span onClick={props.showWelcome}><Link to={'/signin'} className="button btn btn-success">SignIn</Link></span>
        <span>&nbsp;&nbsp;</span>
        <span onClick={props.showWelcome}><Link to={'/signup'} className="button btn btn-success">SignUp</Link></span>
      </div>
      </div>
    </div>
  )
}

export default Welcome
