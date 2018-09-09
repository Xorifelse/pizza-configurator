import { combineReducers } from 'redux'

import pizza from './pizza'
import cart from './cart'

export default combineReducers({
  pizza,
  cart
})