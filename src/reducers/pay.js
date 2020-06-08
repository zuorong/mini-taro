export default function pay (state = {}, action) {
  switch (action.type) {
    case 'PAY':
      return {
        ...state,
        ...action.payload
      }
     default:
       return state
  }
}
