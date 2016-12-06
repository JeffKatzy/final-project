import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addToPlaylist from '../actions/addToPlaylist'

class SongResults extends Component {

  addSong(event) {
    let song = event
    this.props.addToPlaylist(song)
  }

  render() {
    let songs = this.props.songResults.map(song => {return (<div key={song.id}><li>{song.name} - {song.album.name}, {song.artists[0].name}</li><button className="button button-primary" onClick={this.addSong.bind(this, song)}>Add to Playlist</button></div>)})

    return(
      <div className="song-search-results">
        <ul>
        {songs}
        </ul>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToPlaylist }, dispatch)
}

function mapStateToProps(state) {
  return {songResults: state.songs.songResults, playlist: state.songs.playlist}
}

export default connect(mapStateToProps, mapDispatchToProps)(SongResults)
