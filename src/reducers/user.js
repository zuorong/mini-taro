export default function user (state = [], action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        ...action.list
      ]
     default:
       return state
  }
}
