import $ from 'jquery';

export default function destroySong() {
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/playlists/destroy`,
      type: 'POST',
      data: JSON.stringify({token: localStorage.token}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      dispatch({type: 'DESTROY_PLAYLIST', playlist: response.playlist})
    })
  }
}
