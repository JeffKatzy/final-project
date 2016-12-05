import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongResults extends Component {

  addSong(event){
    let id = event
  }

  render() {
    let songs = this.props.songResults.map(song => {return (<div key={song.id}><li>{song.name} - {song.album.name}, {song.artists[0].name}</li><button onClick={this.addSong.bind(this, song.id)}>Add to Playlist</button></div>)})

    return(
      <div>
        <ul>
        {songs}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {songResults: state.songs.songResults}
}

export default connect(mapStateToProps)(SongResults)
