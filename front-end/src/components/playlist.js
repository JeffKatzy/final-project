import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import destroySong from '../actions/destroySong'
import getPlaylist from '../actions/getPlaylist'
import destroyPlaylist from '../actions/destroyPlaylist'

class Playlist extends Component {
  componentWillMount() {
    this.props.getPlaylist(this.props.user)
  }

  handleDestroy(event) {
    this.props.destroySong(event)
  }

  handleClear() {
    this.props.destroyPlaylist()
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
  return {playlist: state.playlist, user: state.user}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ destroySong, getPlaylist, destroyPlaylist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
