import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import destroySong from '../actions/destroySong'
import getPlaylist from '../actions/getPlaylist'

class Playlist extends Component {
  componentWillMount() {
    this.props.getPlaylist(this.props.user)
  }

  handleDestroy(event) {
    this.props.destroySong(event)
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
  return bindActionCreators({ destroySong, getPlaylist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
