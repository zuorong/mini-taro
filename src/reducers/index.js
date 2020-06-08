import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import pay from './pay'

export default combineReducers({
  counter,
  user,
  pay
})
