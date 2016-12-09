export default function songResults(state = [], action) {
  switch (action.type) {
  case 'FIND_SONG':
    return action.songResults
  case 'LOGOUT_USER':
    return []
  default:
    return state;
  }
}
