import { browserHistory } from 'react-router';

export default function logoutUser(){
  localStorage.setItem('token', "")
  browserHistory.push('/')
  return {type: 'LOGOUT_USER'}
}
