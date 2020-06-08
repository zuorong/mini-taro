export const order = (payload) => {
  return {
    type: 'PAY',
    payload
  }
}
export const fetchPayOrder = (data) => (dispatch) => {
  setTimeout(() => {
    dispatch(order(data))
  }, 500)
}