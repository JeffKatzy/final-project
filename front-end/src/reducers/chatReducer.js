export default function chat(state=[], action) {
  switch (action.type) {
    case 'CREATE_GROUP':
      return action.chat
    case 'GET_GROUP':
      return action.chat
    case 'ADD_MESSAGE':
      return [...state, action.chat]
    case 'DELETE_MESSAGE':
      return [...state.slice(0, action.index), ...state.chat.slice(action.index + 1, state.chat.length)]
    default:
      return state;
  }
}
