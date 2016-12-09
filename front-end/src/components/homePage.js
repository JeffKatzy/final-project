import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import SongSearchBar from './songSearchBar'
import SongResults from './songResults'
import Playlist from './playlist'
import Groups from './groups'
import createGroup from '../actions/createGroup'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {invite: ''}
  }

  handleInvite() {
    event.preventDefault()
    this.props.createGroup(this.state.invite)
    document.getElementsByName("invite-username")[0].value = ""
  }

  loginUsernames(event) {
    this.setState({invite: event.target.value})
  }

  render(){
    return(
      <div>
        <p onClick={this.props.handleLogout}><Link to={'/'} className="button button-primary">SignOut</Link></p>
        <div>
        <label>Invite your friends:</label>
        <input type="text" name="invite-username" placeholder="user1, user2, user3" onChange={this.loginUsernames.bind(this)} />
        <button className="button-primary" onClick={this.handleInvite.bind(this)}>Invite</button></div>
        <SongSearchBar />
        <SongResults />
        <Groups />
        <Playlist />

      </div>)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createGroup }, dispatch)
}

// function mapStateToProps(state) {
//   return {state}
// }

export default connect(null, mapDispatchToProps)(HomePage)
