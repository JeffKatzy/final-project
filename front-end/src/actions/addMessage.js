import $ from 'jquery';

export default function addMessage(message, user, group) {
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/messages`,
      type: 'POST',
      data: JSON.stringify({message: {
        text: message,
        user_id: user,
        group_id: group
      },
      token: localStorage.token
    }),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      dispatch({type: 'ADD_MESSAGE', chat: response.chat})
    })
  }
}
