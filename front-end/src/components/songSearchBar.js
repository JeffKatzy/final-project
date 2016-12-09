import React, { Component } from 'react';
import findSong from '../actions/findSong'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSongSearch.bind(this)}>
          <label> Song Name:</label>
          <input type="text" placeholder="Search for a song" onChange={this.handleSongNameChange.bind(this)} />
          <input className="button-primary" type="submit" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ findSong }, dispatch)
}

export default connect(null, mapDispatchToProps)(SongSearchBar)
