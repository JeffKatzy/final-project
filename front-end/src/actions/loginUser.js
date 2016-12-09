import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function loginUser(formData){
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/login',
      type: 'POST',
      data: JSON.stringify({user: {email: formData.email, password: formData.password}}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      if (response.error) {
        alert(response.error)
      } else {
        localStorage.setItem('token', response.jwt)
        dispatch({type: 'LOGIN_USER', user: response.user_id, groups: response.groups, group: response.group, playlist: response.playlist})
        browserHistory.push('/homepage')
      }
    })
  }
}
