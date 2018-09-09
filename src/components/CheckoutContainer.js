import * as React from 'react'
import {connect} from 'react-redux'

import Checkout from './Checkout'
import {removeFromCart} from '../actions/cart'

import {getPricePizza, formatCurrency} from '../lib/prices'

class CheckoutContainer extends React.PureComponent {
  state = {
    drone: false,
    total: 0
  }

  getTotal(){
    return this.props.cart.items.reduce((acc, curr) => acc + getPricePizza(curr), 0)
  }

  componentDidMount(){
    // Format cart state to pass as prop
    let pizzas = this.props.cart.items.map(pizza => {
      return {
        base:  pizza.baseVariants[pizza.base],
        sauce: pizza.sauceMix ? pizza.sauceVariants.join(', ') : pizza.sauceVariants[pizza.sauce],
        toppings: pizza.topping.checked.reduce((acc, curr, i) => curr ? acc.concat(pizza.toppingVariants[i]) : acc, [] ).join(', '),
        price: formatCurrency(getPricePizza(pizza))
      }
    })

    this.setState({
      total: this.getTotal(),
      pizzas,
    })
  }

  onDroneDelivery = (event) => {
    let checked = event.target.checked
    let price =  this.getTotal()  

    if(checked){
      price = price + (this.state.total / 100) * 10
    }

    this.setState({
      drone: checked,
      total: formatCurrency(price)
    })
  }

  onDelete = (id) => {
    this.props.removeFromCart(id)

    this.setState({
      pizzas: [...this.state.pizzas.filter((_, k) => k !== id)],
      total: this.state.total - this.state.pizzas[id].price
    })
  }

  render(){
    if(!this.state.pizzas) return null
    
    return <Checkout {...this.state} onDelete={this.onDelete} onDroneDelivery={this.onDroneDelivery}  />
  }
}

export default connect((store) => ({pizza: store.pizza, cart: store.cart}), {removeFromCart})(CheckoutContainer)