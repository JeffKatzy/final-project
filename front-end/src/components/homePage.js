import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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

  handleInvite(event) {
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

        <div className="row">
<<<<<<< HEAD
          <div className="col-md-3">
            <Playlist />
          </div>
          <div className="col-md-6">

            <div className="form-inline">
              <div className="form-group">
                <form onSubmit={this.handleInvite.bind(this)} className="input-group">
                <label>Group Name</label>
                <input type="text" className="form-control" id="group-name" placeholder="The Party People" onChange={this.handleGroupName.bind(this)} />
              </div>
              <div className="form-group">
                <label>Members</label>
                <input type="text" id="invite-username" className="form-control" placeholder="charlie, niky, wesley" onChange={this.handleUsernames.bind(this)} />
              </div>
              <button className="btn btn-success" type="submit">Invite</button>
              </form>
            </div>

            <SongSearchBar />
            <SongResults />
          </div>
          <div className="col-md-3">
            <h4>Swap ur Groop</h4>
            <Groups />

            <h4>Chat ur Groop</h4>
            <Chat />
          </div>
        </div>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createGroup }, dispatch)
}

export default connect(null, mapDispatchToProps)(HomePage)
