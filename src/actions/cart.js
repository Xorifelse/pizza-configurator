export const ADD = 'ADD_TO_CART'
export const REM = 'REMOVE_FROM_CART'

export function addToCart(param){
  return {
    type: ADD,
    payload: param
  }
}

export function removeFromCart(param){
  return {
    type: REM,
    payload: param
  }
}
