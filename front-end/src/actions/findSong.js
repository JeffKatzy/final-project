import $ from 'jquery';

export default function findSong(formData) {
  return function(dispatch) {
    $.ajax({
      url: `http://localhost:3000/search`,
      type: 'POST',
      data: JSON.stringify({token: localStorage.token, song: {search_term: formData.name}}),
      contentType:"application/json; charset=utf-8",
      dataType: 'json'
    }).done(response => {
      dispatch({type: 'FIND_SONG', songResults: response.songResults})
    })
  }
}
