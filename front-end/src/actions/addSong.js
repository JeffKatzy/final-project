import $ from 'jquery';

export default function addSong(song, group) {
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/songs`,
      type: 'POST',
      data: JSON.stringify({song: {name: song.name, artist: song.artists[0].name, album: song.album.name, spotify_id: song.id}, user: {group: group}, token: localStorage.token}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      dispatch({type: 'ADD_SONG', playlist: response.playlist})
    })
  }
}
