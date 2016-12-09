import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import SongSearchBar from './songSearchBar'
import SongResults from './songResults'
import Playlist from './playlist'
import Groups from './groups'
import inviteUser from '../actions/inviteUser'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {invite: ''}
  }

  handleInvite() {
    event.preventDefault()
    this.props.inviteUser(this.state.invite)
    document.getElementsByName("invite-username")[0].value = ""
    alert("Friend invited!")
  }

  loginUsernames(event) {
    this.setState({invite: event.target.value})
  }

  render(){
    return(
      <div>
        <p onClick={this.props.handleLogout}><Link to={'/'} className="button button-primary">SignOut</Link></p>
        <div><input type="text" name="invite-username" placeholder="invite friends by username" onChange={this.loginUsernames.bind(this)} />
        <button className="button-primary" onClick={this.handleInvite.bind(this)}>Invite</button></div>
        <SongSearchBar />
        <SongResults />
        <Playlist />
        <Groups />
      </div>)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ inviteUser }, dispatch)
}

// function mapStateToProps(state) {
//   return {state}
// }

export default connect(null, mapDispatchToProps)(HomePage)
