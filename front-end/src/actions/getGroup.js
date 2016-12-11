import $ from 'jquery';

export default function getGroup(id) {
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/groups/${id}/`,
      type: 'POST',
      data: JSON.stringify({token: localStorage.token, group: {id: id}}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      dispatch({
        type: 'GET_GROUP',
        playlist: response.playlist,
        chat: response.chat,
        groups: response.groups,
        group: response.group
      })
    })
  }
}
