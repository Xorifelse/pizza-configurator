export function getBasePrice(pizza){
  switch(pizza.base){
    case 0: return 8.99
    case 1: return 11.49
    case 2: return 13.49

    default:
      return 0
  }
}

export function getSaucePrice(pizza){
  if(pizza.sauceMix){
    return 1.5
  } else {
    switch(pizza.sauce){
      case 0: return 1
      case 1: return 1

      default:
        return 0
    }
  }
}

export function getToppingsPrice(pizza){
  return pizza.topping.checked.filter(v => v).length * .5
}

export function getPricePizza(pizza){
  return (getBasePrice(pizza) + getSaucePrice(pizza) + getToppingsPrice(pizza))
}

export function formatCurrency(val){
  return parseFloat(val).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}