import React from 'react'
import { Link } from 'react-router'

function Welcome(props) {
  return(
    <div id="welcome">
      <div className="row">
      <div className="twelve columns">
        <span onClick={props.showWelcome}><Link to={'/signin'} className="button button-primary">SignIn</Link></span>
        <span onClick={props.showWelcome}><Link to={'/signup'} className="button button-primary">SignUp</Link></span>
      </div>
      </div>
    </div>
  )
}

export default Welcome
