import {
  ADD,
  REM 
} from '../actions/cart'

const initialState = {
  items: []
}


export default (state = initialState, action = {}) => {
  switch (action.type){
    case ADD:
      return {...state, items: [...state.items, action.payload] }
    case REM:
      return {...state, items: [...state.items.filter((v, k) => k !== action.payload)]}
    default:
      return state
  }
}