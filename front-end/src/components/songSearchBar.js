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
      <div className="row">
          <form onSubmit={this.handleSongSearch.bind(this)} className="input-group">
            <input type="text" className="form-control" placeholder="Search songs..." onChange={this.handleSongNameChange.bind(this)} />
            <span className="input-group-btn">
              <input className="btn btn-success" type="submit" value="Search" />
            </span>
          </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ findSong }, dispatch)
}

export default connect(null, mapDispatchToProps)(SongSearchBar)
