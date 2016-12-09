export default function showWelcome(state = true, action) {
  switch (action.type) {
  case 'LOGIN_USER':
    return false
  case 'LOGOUT_USER':
    return true
  default:
    return state;
  }
}
