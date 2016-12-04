import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function getUser(formData){
  return function(dispatch){
    debugger
    $.ajax({
      url: 'http://localhost:3000/login',
      type: 'POST',
      data: JSON.stringify({user: {email: formData.email, password: formData.password}}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      localStorage.setItem('token', response.jwt)
      dispatch({type: 'LOGIN_USER', current_user: response.current_user})
      browserHistory.push('/homepage')
    })
  }
}