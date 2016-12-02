import $ from 'jquery';

export function getUsers(){
  return function(dispatch){
    dispatch({type: 'LOADING_DATA'})
    $.ajax({url: "http://localhost:3000/users",
    type: "GET",
    headers: {authorization: localStorage.getItem('jwt')}})
    .done(function(data){
      dispatch({type: 'FETCH_PROFILES', payload: data})
    })
  }
}
