import {
  FIELD_CHANGE,
  ADD_BASE,
  ADD_SAUCE,
  ADD_TOPPING,
  SET_BASE,
  SET_SAUCE,
  SET_MIX,
  SET_TOPPING,
  FIELD_RESET,
} from '../actions/pizza'

const initialState = {
  field: 0,
  base: 0,
  baseVariants: [],
  sauce: 0,
  sauceMix: false,
  sauceVariants: [],
  topping: {
    disable: [],
    checked: []
  },
  toppingVariants: []
}


export default (state = initialState, action = {}) => {
  switch (action.type){
    case ADD_BASE:
      return {...state, baseVariants: state.baseVariants.concat(action.payload)}
    case ADD_SAUCE:
      return {...state, sauceVariants: state.sauceVariants.concat(action.payload)}
    case ADD_TOPPING:
      return {...state, toppingVariants: state.toppingVariants.concat(action.payload)}
    case SET_BASE:
      return {...state, base: action.payload}
    case SET_SAUCE:
      return {...state, sauce: action.payload}
    case SET_MIX:
      return {...state, sauceMix: action.payload}
    case SET_TOPPING:
      return {...state, topping: action.payload}
    case FIELD_CHANGE:
      return {...state, field: action.payload}
    case FIELD_RESET:
      return {...initialState}
    default:
      return state
  }
}