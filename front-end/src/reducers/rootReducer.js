import { combineReducers } from 'redux';

function users(state =  {current_user: null}, action){
  switch (action.type) {
  case 'LOGIN_USER':
    return {...state, current_user: action.current_user}
  default:
    return state;
  }
}

function songs(state = {playlist: [], songResults: []}, action){
  switch (action.type) {
    case 'ADD_SONG':
      return {...state, playlist: action.playlist}
  case 'FIND_SONG':
    return {...state, songResults: action.songResults}
  default:
      return state;
  }
}

export default combineReducers({users, songs})
