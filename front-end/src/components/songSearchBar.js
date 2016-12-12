import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import findSong from '../actions/findSong'

class SongSearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {searchName: ''}
  }

  handleSongNameChange(event) {
    this.setState({searchName: event.target.value})
  }

  handleSongSearch(event) {
    event.preventDefault()
    this.props.findSong(this.state)
    document.getElementById("song-search").value = ""
  }

  render() {
    return(
      <div className="row">
        <form onSubmit={this.handleSongSearch.bind(this)} className="test">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <input id="song-search" type="text" className="form-control" placeholder="Search songs..." onChange={this.handleSongNameChange.bind(this)} />
            <input className="btn btn-success" type="submit" value="Search" />
          </div>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ findSong }, dispatch)
}

export default connect(null, mapDispatchToProps)(SongSearchBar)
