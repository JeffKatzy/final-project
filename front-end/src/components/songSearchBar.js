import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import findSong from '../actions/findSong'

class SongSearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {name: ''}
  }

  handleSongNameChange(event) {
    this.setState({name: event.target.value})
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
          <input type="text" placeholder="enter song name" onChange={this.handleSongNameChange.bind(this)} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ findSong }, dispatch)
}

export default connect(null, mapDispatchToProps)(SongSearchBar)
