export default function groups(state = [], action) {
  switch (action.type) {
  case 'LOGIN_USER':
    return action.groups
  case 'CREATE_GROUP':
    return action.groups
  case 'GET_GROUP':
    return action.groups
  case 'LOGOUT_USER':
    return []
  default:
    return state;
  }
}
