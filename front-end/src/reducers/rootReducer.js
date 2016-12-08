import { combineReducers } from 'redux';

function user(state = null, action){
  switch (action.type) {
  case 'LOGIN_USER':
    return action.user
  case 'LOGOUT_USER':
    return null
  default:
    return state;
  }
}

function songResults(state = [], action) {
  switch (action.type) {
  case 'FIND_SONG':
    return action.songResults
  case 'LOGOUT_USER':
    return []
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
  case 'DESTROY_PLAYLIST':
    return action.playlist
  case 'LOGOUT_USER':
    return []
  default:
    return state;
  }
}

function playlists(state = [], action) {
  switch (action.type) {
  case 'GET_PLAYLIST':
    return action.playlists
  default:
    return state;
  }
}


function showWelcome(state = true, action) {
  switch (action.type) {
  case 'LOGIN_USER':
    return false
  case 'LOGOUT_USER':
    return true
  default:
    return state;
  }
}

export default combineReducers({user, songResults, playlist, showWelcome, playlists})
