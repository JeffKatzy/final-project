import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getPlaylist from '../actions/getPlaylist'

class SharedPlaylists extends Component {
  changePlaylist(event) {
    this.props.getPlaylist(event)
  }


  render() {
    let buttonList = this.props.playlists.map(playlist => {
      return <button key={playlist.id} className="button-primary" onClick={this.changePlaylist.bind(this, playlist.id)}>{playlist.name}</button>
    })
    return(
      <div>
        {buttonList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {playlist: state.playlist, playlists: state.playlists}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getPlaylist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SharedPlaylists)
