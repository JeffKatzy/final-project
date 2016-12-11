import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import SongSearchBar from './songSearchBar'
import SongResults from './songResults'
import Playlist from './playlist'
import Groups from './groups'
import Chat from './chat'
import createGroup from '../actions/createGroup'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {invite: '', groupName: ''}
  }

  handleInvite() {
    event.preventDefault()
    this.props.createGroup(this.state.invite, this.state.groupName)
    document.getElementById("invite-username").value = ""
    document.getElementById("group-name").value = ""

  }

  handleGroupName(event) {
    this.setState({groupName: event.target.value})
  }

  handleUsernames(event) {
    this.setState({invite: event.target.value})
  }

  render(){
    return(
      <div>
        <p onClick={this.props.handleLogout}><Link to={'/'} className="button btn btn-success">SignOut</Link></p>

        <div className="row">
          <div className="col-md-4 col-md-push-4">
            <div className="input-group">
              <form onSubmit={this.handleInvite.bind(this)} className="input-group">
                <label>Invite your friends:</label>
                <input type="text" id="group-name" className="form-control" placeholder="group name" onChange={this.handleGroupName.bind(this)} /> &nbsp;
                <input type="text" id="invite-username" className="form-control" placeholder="user1, user2, user3" onChange={this.handleUsernames.bind(this)} />
                <span className="input-group-btn">
                  <button className="btn btn-success" type="button">Invite</button>
                </span>
              </form>
            </div>
          </div>
        </div>

        <SongSearchBar />
        <SongResults />
        <Groups />
        <Playlist />
        <Chat />


      </div>)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createGroup }, dispatch)
}

export default connect(null, mapDispatchToProps)(HomePage)
