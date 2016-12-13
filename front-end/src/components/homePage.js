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

          <div className="col-md-4">
            <Playlist />
          </div>

          <div className="col-md-4">

            <div className="panel panel-success">
              <div className="well">
                <SongSearchBar />
              </div>
              <SongResults />
            </div>

          </div>

          <div className="col-md-4">

            <div className="panel panel-success">
              <div className="panel-heading">
                <h3 className="panel-title">Swap Groups</h3>
              </div>
              <div className="panel-body">
                <Groups />
              </div>
            </div>

            <div className="panel panel-success">
              <div className="panel-heading">
                <h3 className="panel-title">Create A Group</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.handleInvite.bind(this)} className="form-horizontal">
                  <div className="form-group">
                    <div className="col-md-12">
                      <input type="text" className="form-control" id="group-name" placeholder="Group Name" onChange={this.handleGroupName.bind(this)} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <input type="text" id="invite-username" className="form-control" placeholder="charlie, niky, wesley" onChange={this.handleUsernames.bind(this)} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <button className="btn btn-success" type="submit">Add Group</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

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
