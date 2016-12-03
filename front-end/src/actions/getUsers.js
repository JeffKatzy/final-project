import $ from 'jquery';

export default function getUsers(){
  return function(dispatch){
    dispatch({type: 'LOADING_DATA'})
    $.ajax({url: "http://localhost:3000/users",
    type: "GET",
    // headers: {authorization: localStorage.getItem('jwt')}
  })
    .done(function(data){
      alert("I do things")

      dispatch({type: 'FETCH_PROFILES', payload: data})
      console.log(data)
    })
  }
}
