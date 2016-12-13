import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import destroySong from '../actions/destroySong'
import getGroup from '../actions/getGroup'
import destroyPlaylist from '../actions/destroyPlaylist'
import SongPlayer from './songPlayer'


class Playlist extends Component {

  handleDestroy(event) {
    this.props.destroySong(event, this.props.group)
  }

  // delete playlist button
  // <button className="button btn btn-success" onClick={this.handleClear.bind(this)}>Delete Playlist</button>

  handleClear() {
    this.props.destroyPlaylist(this.props.group, this.props.user)
  }

  render() {
    let songs = this.props.playlist.map(song => {
      return (
        <tr key={song.id}>
          <td>
            <span className="glyphicon glyphicon-remove" onClick={this.handleDestroy.bind(this, song.id)}></span>
          </td>
          <td>
            {song.name}
          </td>
          <td>
            {song.artist}
          </td>
        </tr>
      )})

    return(
      <div className="panel panel-success">
        <div className="well">
          <SongPlayer playlist={this.props.playlist} />
        </div>

        <table className="table table-hover">
          <tbody>
            {songs}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {playlist: state.playlist, user: state.user, group: state.group}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ destroySong, getGroup, destroyPlaylist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
