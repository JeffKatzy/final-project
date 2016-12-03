import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function findSong(formData) {
  return function(dispatch) {
    dispatch({type: 'FIND_SONG'})
    $.ajax({
      url: `https://api.spotify.com/v1/search?q=${formData.name}&type=track`,
      type: 'GET',
      data: JSON.stringify({name: formData.name}),
      contentType:"application/json; charset=utf-8",
      dataType: 'json'
    }).done((response) => {
      render response.tracks.items.map(song => {return (
        song.id,
        song.name,
        song.artists[0].name
      )})
    })
  }
}




// export default function createUser(formData){
//   return function(dispatch){
//     dispatch({type: 'CREATING_USER'})
//     $.ajax({
//       url: 'http://localhost:3000/users',
//       type: 'POST',
//       data: JSON.stringify({user: {email: formData.email, password: formData.password}}),
//       contentType:"application/json; charset=utf-8",
//       dataType: 'json'
//     }).done((response) => {
//       // browserHistory.push('/newuser')
//       // localStorage.setItem('token', response.jwt)
//       // dispatch({type: 'LOGIN_USER', current_user: response.current_user})
//       console.log("response")
//     })
//   }
// }
