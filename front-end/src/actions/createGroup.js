import $ from 'jquery';

export default function createGroup(formData) {
  return function(dispatch) {
    $.ajax({
      url: `http://localhost:3000/groups/`,
      type: 'POST',
      data: JSON.stringify({token: localStorage.token, group: {users: formData}}),
      contentType:"application/json; charset=utf-8",
      dataType: 'json'
    }).done(response => {
      if (response.error) {
        alert("Please enter usernames of current users")
      } else {
        dispatch({type: 'CREATE_GROUP', playlist: response.playlist, groups: response.groups, group: response.group, chat: response.chat})
        alert("Friend invited!")
      }
    })
  }
}
