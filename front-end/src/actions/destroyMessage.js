import $ from 'jquery';

export default function destroyMessage() {
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/messages/${id}/destroy`,
      type: 'POST',
      data: JSON.stringify({token: localStorage.token}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      dispatch({type: 'DELETE_MESSAGE', chat: response.chat})
    })
  }
}
