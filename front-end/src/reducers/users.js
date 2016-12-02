export default function users(state =  [{"id": 1 ,"name": "bob"}], action){
  switch (action.type) {
  case 'FETCH_PROFILES':
    return state.concat(action.payload)
  case 'ADD':
    return state.concat([{"id": 1 ,"name": "added"}])
  default:
    return state;
  }
}
