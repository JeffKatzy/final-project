import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function createUser(formData){
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/users',
      type: 'POST',
      data: JSON.stringify({user: {email: formData.email, password: formData.password, name: formData.name}}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      if (response.error) {
        alert(response.error)
      } else {
        localStorage.setItem('token', response.jwt)
        dispatch({type: 'LOGIN_USER', user: response.user_id, group: response.group, playlist: response.playlist, chat: response.chat, groups: response.groups})
        browserHistory.push('/homepage')
      }
    })
  }
}
