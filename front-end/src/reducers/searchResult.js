export default function searchForSong(state = {song_name: null}, action){
  switch (action.type) {
    case 'FIND_SONG':
      return {...state, song_name: action.song_name}
      break;
    // case 'DISPLAY_RESULTS':
    //   return {...state, creating_user: false, current_user: action.current_user}
    default:
      return state
  }
}
