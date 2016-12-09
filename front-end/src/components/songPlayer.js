import React from 'react'

export default function SongPlayer(props) {
  let songList = props.playlist.map(song => {return song.spotify_id})
  let spotifyEmbed = "https://embed.spotify.com/?uri=spotify:trackset:DAYJAMS:" + songList
  return (<div><iframe src={spotifyEmbed} width="300" height="380" frameBorder="0" allowTransparency="true" /></div>)
}
