import $ from 'jquery';

export default function getGroup(id) {
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/groups/${id}/`,
      type: 'GET',
      data: JSON.stringify({token: localStorage.token}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      debugger
      dispatch({type: 'GET_GROUP', playlist: response.playlist, chat: response.chat})
    })
  }
}
