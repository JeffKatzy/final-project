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

  handleClear() {
    this.props.destroyPlaylist(this.props.group, this.props.user)
  }

  render() {
    let songs = this.props.playlist.map(song => {
      return (
        <div key={song.id}>
          <li>{song.name} - {song.album}, {song.artist} <span onClick={this.handleDestroy.bind(this, song.id)}>[x]</span></li>
        </div>
      )})

    return(
      <div className="playlist-time">
        <SongPlayer playlist={this.props.playlist} />
        <h4>Playlist</h4>
        <button className="button button-primary" onClick={this.handleClear.bind(this)}>Delete Playlist</button>
        <ul>
          {songs}
        </ul>
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
