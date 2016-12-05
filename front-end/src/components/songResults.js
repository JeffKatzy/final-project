import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongResults extends Component {
  constructor(props){
    super(props)
    this.addSong = this.addSong.bind(this)
  }

  addSong(event){
    debugger
    // let id = event.target.key

  }

  render() {
    let songs = this.props.songResults.map(song => {return (<div key={song.id}><li>{song.name} - {song.album.name}, {song.artists[0].name}</li><button onClick={this.addSong}>Add to Playlist</button></div>)})

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
