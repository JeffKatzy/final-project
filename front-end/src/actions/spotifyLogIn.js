// import $ from 'jquery'
//
// export function spotifyUserLogIn() {
//   return function(dispatch) {
//     $.ajax({
//
//     })
//   }
// }

// export function spotifyUserLogIn(){
//   return function(dispatch){
//     $.ajax({url: `http://localhost:3000/users`,
//       type: "GET",
//       headers: {authorization: ""}
//     }).done(function(data){
//       debugger
//       dispatch({type: 'FETCH_USERS', payload: data})
//     })
//   }
// }
//
// export function getArticle(searchTerm){
//  return function(dispatch){
//    $.ajax({url: `https://mercury.postlight.com/parser?url=${searchTerm}`,
//            type: "GET",
//            contentType: "application/json",
//            headers: {"x-api-key": "T9b6wK7r9S9HC6jFHYtDY9EaErommV6q3wu0bRcc"}})
//      .done(function(data){
//      dispatch({type: 'FETCH_CONTENT', payload: data})
//      })
//     }
// }
