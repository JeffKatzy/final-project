import $ from 'jquery';

export default function inviteUser(formData) {
  return function(dispatch) {
    $.ajax({
      url: `http://localhost:3000/invite`,
      type: 'POST',
      data: JSON.stringify({token: localStorage.token, invite: {email: formData}}),
      contentType:"application/json; charset=utf-8",
      dataType: 'json'
    }).done(response => {
      dispatch({type: 'INVITE_USER'})
    })
  }
}
