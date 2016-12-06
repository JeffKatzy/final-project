import $ from 'jquery';

export default function addToPlaylist(song) {
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/songs',
      type: 'POST',
      data: JSON.stringify({song: {name: song.name, artist: song.artists[0].name, album: song.album.name, spotify_id: song.id, duration: song.duration_ms}, token: localStorage.token}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      dispatch({type: 'ADD_SONG', playlist: response.jwt.playlist})
    //       localStorage.setItem('token', response.jwt)
    //       dispatch({type: 'LOGIN_USER', current_user: response.current_user})
    //       browserHistory.push('/homepage')
    })
  }
}
