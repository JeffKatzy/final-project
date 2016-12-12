import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SongSearchBar from './songSearchBar'
import SongResults from './songResults'
import Playlist from './playlist'
import Groups from './groups'
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

        <div className="row">
          <div className="col-md-3">
            <Playlist />
          </div>
          <div className="col-md-6">

            <div className="form-inline">
              <div className="form-group">
                <label>Group Name</label>
                <input type="text" className="form-control" id="group-name" placeholder="The Party People" onChange={this.handleGroupName.bind(this)} />
              </div>
              <div className="form-group">
                <label>Members</label>
                <input type="text" id="invite-username" className="form-control" placeholder="charlie, niky, wesley" onChange={this.handleUsernames.bind(this)} />
              </div>
              <button type="button" className="btn btn-success" onClick={this.handleInvite.bind(this)}>Invite</button>
            </div>

            <SongSearchBar />
            <SongResults />
          </div>
          <div className="col-md-3">
            <h4>Swap ur Groop</h4>
            <Groups />

            <h4>Chat ur Groop</h4>
          </div>
        </div>

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
