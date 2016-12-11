export default function chat(state=[], action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.chat
    case 'CREATE_GROUP':
      return action.chat
    case 'GET_GROUP':
      return action.chat
    case 'ADD_MESSAGE':
      return action.chat
    case 'DESTROY_MESSAGE':
      return action.chat
    case 'LOGOUT_USER':
      return []
    default:
      return state;
  }
}
