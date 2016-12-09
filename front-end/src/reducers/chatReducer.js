export default function chat(state=[], action) {
  switch (action.type) {
    case 'GET_GROUP':
      return action.message
    case 'ADD_MESSAGE':
      return [...state, action.message]
    case 'DELETE_MESSAGE':
      return [...state.slice(0, action.index), ...state.messages.slice(action.index + 1, state.messages.length)]
    default:
      return state;
  }
}
