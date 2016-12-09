import $ from 'jquery';

export default function destroySong(group, user) {
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/groups/${group}/destroy`,
      type: 'POST',
      data: JSON.stringify({token: localStorage.token, group: {id: group, user_id: user}}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((response) => {
      dispatch({type: 'DESTROY_PLAYLIST', playlist: response.playlist})
    })
  }
}
