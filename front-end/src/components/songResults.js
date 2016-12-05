import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongResults extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let songs = this.props.songResults.map(function(song){
      return <li key={song.id}>{song.name}</li>
    })
    debugger

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
  return {songResults: state.songResults}
}

export default connect(mapStateToProps)(SongResults)
