import React from 'react'
// import { Link } from 'react-router'

function sharedPlaylists() {
  constructor(props) {
    super(props)
    this.changePlaylist = this.changePlaylist.bind(this)
  }

  changePlaylist() {
    
  }


  render() {
    let buttonList = this.props.playlists.map(playlist => {
      return <button className="button-primary" onClick={changePlaylist}>{playlist.name}</button>
    })
    return(
      <div>
        {buttonList}
      </div>
    )
  }
}

export default sharedPlaylists
