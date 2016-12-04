import { combineReducers } from 'redux';

function users(state =  {current_user: null}, action){
  switch (action.type) {
  case 'LOGIN_USER':
    return {...state, current_user: action.current_user}
  default:
    return state;
  }
}

export default combineReducers({users})

// function songs(state = [], action){
//   switch (action.type) {
//     case 'ADD_SONG':
//       return [...state, action.payload]
//     default:
//     return state;
//   }
// }
