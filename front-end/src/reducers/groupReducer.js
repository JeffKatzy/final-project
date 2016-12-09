export default function group(state = null, action) {
  switch (action.type) {
  case 'LOGIN_USER':
    return action.group
  case 'CREATE_USER':
    return action.group
  case 'LOGOUT_USER':
    return null
  default:
    return state;
  }
}
