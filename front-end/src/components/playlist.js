import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

class Playlist extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    let songs = this.props.playlist.map(song => {
      return (
        <div key={song.id}>
          <li>{song.name} - {song.album}, {song.artist}</li>
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
  return {playlist: state.songs.playlist}
}

export default connect(mapStateToProps)(Playlist)
