import $ from 'jquery';

export default function inviteChat(emails) {
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/chats/new`,
      type: 'POST',
      data: JSON.stringify({message: {emails: emails}, token: localStorage.token}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      dispatch({type: 'ADD_CHAT', chat: response.chat})
    })
  }
}
