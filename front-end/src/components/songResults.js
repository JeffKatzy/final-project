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
    let songs = this.props.songs.map(song => {return (
      <tr key={song.id}><td><span className="glyphicon glyphicon-plus" onClick={this.handleAdd.bind(this, song)}></span></td><td>{song.name}</td><td>{song.album.name}</td><td>{song.artists[0].name}</td></tr>)})

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
  return bindActionCreators({ addSong }, dispatch)
}

function mapStateToProps(state) {
  return {songs: state.songResults, group: state.group}
}

export default connect(mapStateToProps, mapDispatchToProps)(SongResults)
