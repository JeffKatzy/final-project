export default function signup(state = {creating_user: true, current_user: null}, action){
  switch (action.type) {
    case 'CREATING_USER':
      return {...state, creating_user: true}
      break;
    case 'LOGIN_USER':
      return {...state, creating_user: false, current_user: action.current_user}
    default:
      return state
  }
}
