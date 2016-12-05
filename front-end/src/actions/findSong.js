import $ from 'jquery';
// import SongResults from '../components/songResults'

export default function findSong(formData) {
  return function(dispatch) {
    $.ajax({
      url: `https://api.spotify.com/v1/search?q=${formData.name}&type=track`,
      type: 'GET',
      contentType:"application/json; charset=utf-8",
      dataType: 'json'
    }).done(response => {
      dispatch({type: 'FIND_SONG', songResults: response.tracks.items})
    })
  }
}
