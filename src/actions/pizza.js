export const FIELD_CHANGE = 'FIELD_NEXT'
export const FIELD_RESET = 'FIELD_RESET'

export const SET_TOPPING = 'SET_TOPPING'
export const SET_SAUCE = 'SET_SAUCE'
export const SET_MIX = 'SET_MIX'
export const SET_BASE = 'SET_BASE'

export const ADD_BASE = 'ADD_BASE'
export const ADD_SAUCE = 'ADD_SAUCE'
export const ADD_TOPPING = 'ADD_TOPPING'

export function changeField(param){
  return {
    type: FIELD_CHANGE,
    payload: param
  }
}

export function resetFields(){
  return {
    type: FIELD_RESET
  }
}

export function setBase(param){
  return {
    type: SET_BASE,
    payload: Number(param)
  }
}

export function setSauce(param){
  return {
    type: SET_SAUCE,
    payload: Number(param)
  }
}

export function setSauceMix(param){
  return {
    type: SET_MIX,
    payload: param
  }
}

export function setTopping(checked = [], disable = []){
  return {
    type: SET_TOPPING,
    payload: {
      checked,
      disable
    }
  }
}

function addBase(param){
  return {
    type: ADD_BASE,
    payload: param
  }
}

function addSauce(param){
  return {
    type: ADD_SAUCE,
    payload: param
  }
}

function addTopping(param){
  return {
    type: ADD_TOPPING,
    payload: param
  }
}

export function fetchBases(){
  return (dispatch) => {
    [
      '25cm NY Style',
      '30cm NY Style',
      '35cm NY Style'
    ].map(v => dispatch(addBase(v)))
  }
}

export function fetchSauces(){
  return (dispatch) => {
    [
      'White',
      'Red'
    ].map(v => dispatch(addSauce(v)))
  }
}

export function fetchToppings(){
  return (dispatch) => {
    [
      'Pineapple',
      'Corn',
      'Olives',
      'Red union',
      'Spinach',
      'Cherry tomatoes'
    ].map(v => dispatch(addTopping(v)))
  }
}