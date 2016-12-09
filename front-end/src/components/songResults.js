import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addSong from '../actions/addSong'

class SongResults extends Component {

  handleAdd(event) {
    let song = event
    this.props.addSong(song, this.props.group)
  }

  render() {
    let songs = this.props.songs.map(song => {return (<div key={song.id}><li>{song.name} - {song.album.name}, {song.artists[0].name}</li><button className="button button-primary" onClick={this.handleAdd.bind(this, song)}>Add to Playlist</button></div>)})

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
  return bindActionCreators({ addSong }, dispatch)
}

function mapStateToProps(state) {
  return {songs: state.songResults, group: state.group}
}

export default connect(mapStateToProps, mapDispatchToProps)(SongResults)
