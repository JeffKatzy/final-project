import React from 'react'
import { Link } from 'react-router'

function Welcome(props) {
  return(
    <div id="welcome">
    <ul className="welcome-list">
      <li onClick={props.showWelcome}><Link to={'/signin'}>SignIn</Link></li>
      <li onClick={props.showWelcome}><Link to={'/signup'}>SignUp</Link></li>
    </ul>
    </div>
  )
}

export default Welcome
