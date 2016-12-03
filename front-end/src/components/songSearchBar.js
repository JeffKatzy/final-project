import React, { Component } from 'react'

class songSearchBar extends Component {

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
    findSong()
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

export default songSearchBar
