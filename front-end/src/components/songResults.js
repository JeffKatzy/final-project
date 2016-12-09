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
    let songs = this.props.songs.map(song => {return (<tr key={song.id}><td><span className="glyphicon glyphicon-plus" onClick={this.addSong.bind(this, song)}></span></td><td>{song.name}</td><td>{song.album.name}</td><td>{song.artists[0].name}</td></tr>)})

    return(
      <div className="row">
        <div className="col-md-8 col-md-push-2">
          <table className="table table-hover">
            <tbody>
              {songs}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToPlaylist }, dispatch)
}

function mapStateToProps(state) {
  return {songs: state.songResults}
}

export default connect(mapStateToProps, mapDispatchToProps)(SongResults)
