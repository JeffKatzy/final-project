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

          <div className="col-md-3">
            <Playlist />
          </div>

          <div className="col-md-6">
            <form onSubmit={this.handleInvite.bind(this)} className="form-inline">
              <div className="form-group">
                <input type="text" className="form-control" id="group-name" placeholder="Group Name" onChange={this.handleGroupName.bind(this)} />
              </div>
              <div className="form-group">
                <input type="text" id="invite-username" className="form-control" placeholder="charlie, niky, wesley" onChange={this.handleUsernames.bind(this)} />
              </div>
              <button className="btn btn-success" type="submit">Add Group</button>
            </form>

            <SongSearchBar />
            <SongResults />
          </div>

          <div className="col-md-3">
            <h4>Swap you Group</h4>
            <Groups />

            <h4>Chat your Group</h4>
            <Chat />
          </div>

        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createGroup }, dispatch)
}

export default connect(null, mapDispatchToProps)(HomePage)
