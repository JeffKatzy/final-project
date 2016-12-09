export default function playlist(state = [], action) {
  switch (action.type) {
  case 'LOGIN_USER':
    return action.playlist
  case 'ADD_SONG':
    return action.playlist
  case 'DESTROY_SONG':
    return action.playlist
  case 'CREATE_GROUP':
    return action.playlist
  case 'GET_GROUP':
    return action.playlist
  case 'DESTROY_PLAYLIST':
    return action.playlist
  case 'LOGOUT_USER':
    return []
  default:
    return state;
  }
}
