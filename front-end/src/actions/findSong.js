import $ from 'jquery';

export default function findSong(formData) {
  return function(dispatch) {
    dispatch({type: 'FIND_SONG'})
    $.ajax({
      url: `https://api.spotify.com/v1/search?q=${formData.name}&type=track`,
      type: 'GET',
      contentType:"application/json; charset=utf-8",
      dataType: 'json'
    })}.done((response) => {
      response.tracks.items.map(song => {
        return (
          song.id,
          song.name,
          song.artists[0].name
        )
      })
  })
}
