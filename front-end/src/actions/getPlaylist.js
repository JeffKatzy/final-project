import $ from 'jquery';

export default function getPlaylist(id) {
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/playlists/${id}/`,
      type: 'GET',
      data: JSON.stringify({token: localStorage.token}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      dispatch({type: 'GET_PLAYLIST', playlist: response.playlist, playlists: })
    })
  }
}
