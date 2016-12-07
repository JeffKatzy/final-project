import { combineReducers } from 'redux';

function user(state = null, action){
  switch (action.type) {
  case 'LOGIN_USER':
    return action.user
  default:
    return state;
  }
}

function songResults(state = [], action) {
  switch (action.type) {
  case 'FIND_SONG':
    return action.songResults
  default:
    return state;
  }
}

function playlist(state = [], action) {
  switch (action.type) {
  case 'ADD_SONG':
    return action.playlist
  case 'DESTROY_SONG':
    return action.playlist
  case 'GET_PLAYLIST':
    return action.playlist
  default:
      return state;
  }
}

export default combineReducers({user, songResults, playlist})
