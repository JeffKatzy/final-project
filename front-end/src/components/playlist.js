import React, { Component } from 'react'
import destroySong from '../actions/destroySong'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Playlist extends Component {
  constructor(props) {
    super(props)
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
  return {playlist: state.songs.playlist}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ destroySong }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
