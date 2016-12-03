import { combineReducers } from 'redux';
// import users from './users.js'
import signup from './signup.js'

function songs(state = [], action){
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload]
    default:
    return state;
  }
}

function loading(state = false, action){
  switch (action.type) {
    case 'LOADING_DATA':
      return true
    case 'LOGIN_USER':
      return false
    default:
    return state;
  }
}

function users(state =  [{"id": 1 ,"name": "bob"}], action){
  switch (action.type) {
  case 'LOADING_DATA':
    return true
  case 'LOGIN_USER':
    return state.concat(action.payload)
  case 'ADD':
    return state.concat([{"id": 1 ,"name": "added"}])
  default:
    return state;
  }
}

export default combineReducers({ users, signup, loading })
