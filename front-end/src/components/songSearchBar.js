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
      <div className="col-md-8 col-md-push-2">
        <form onSubmit={this.handleSongSearch.bind(this)} className="input-group">
          <input id="song-search" type="text" className="form-control" placeholder="Search songs..." onChange={this.handleSongNameChange.bind(this)} />
          <span className="input-group-btn">
            <input className="btn btn-success" type="submit" value="Search" />
          </span>
        </form>
      </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ findSong }, dispatch)
}

export default connect(null, mapDispatchToProps)(SongSearchBar)
