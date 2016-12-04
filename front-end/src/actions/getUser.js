import $ from 'jquery';

export default function getUser(email, password){
  return function(dispatch){
    $.ajax({
      url: "http://localhost:3000/sessions",
      type: "POST",
      data: JSON.stringify({user: {email: email, password: password}}),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
  }).done((response) => {
    debugger
    alert("i'm hit")
    })
  }
}

// export function loginUserAction(email, password){
//   return function(dispatch){
//     $.ajax({url:"http://localhost:3000/sessions",
//             type: "POST",
//             data: JSON.stringify({user: {email: email, password: password}}),
//      contentType:"application/json; charset=utf-8",
//      dataType: "json"
//     }).done(function(data){
//       localStorage.setItem('jwt', data.jwt)
//       // fix this dispatch it's not working yet
//       dispatch({type: 'LOGIN_USER', payload: data})
//     })
//   }
// }
