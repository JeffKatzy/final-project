import $ from 'jquery';

export default function inviteUser(formData) {
  return function(dispatch) {
    $.ajax({
      url: `http://localhost:3000/playlist`,
      type: 'POST',
      contentType:"application/json; charset=utf-8",
      dataType: 'json'
    }).done(response => {
      dispatch({type: 'INVITE_USER', songResults: response.tracks.items})
    })
  }
}