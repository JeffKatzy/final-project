import $ from 'jquery';

export default function addMessage(message) {
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/messages/new`,
      type: 'POST',
      data: JSON.stringify({message: {text: message, chatId: chatId}, token: localStorage.token}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      dispatch({type: 'ADD_MESSAGE', chat: response.chat})
    })
  }
}
