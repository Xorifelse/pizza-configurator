import * as React from 'react'
import {connect} from 'react-redux'

import {changeField, setTopping, fetchToppings, resetFields} from '../actions/pizza'
import {addToCart} from '../actions/cart'
import PizzaTopping from './PizzaTopping'

class PizzaToppingContainer extends React.PureComponent {
  state = {
    checked: [],
    disable: [],
  }

  componentDidMount(){
    // Simulate db request.
    if(this.props.pizza.toppingVariants.length == 0){
      this.props.fetchToppings()
    }

    this.setState({
      checked: this.props.pizza.topping.checked,
      disable: this.props.pizza.topping.disable
    })
  }

  addToCart = () => {
    this.props.addToCart(this.props.pizza)
    this.props.resetFields()
    this.props.changeField(0)
  }

  onCheckout = () => {
    this.props.addToCart(this.props.pizza)
    this.props.resetFields()
    this.props.changeField(3)
  }

  handleTopping = (event) => {
    const c = [...this.state.checked]
    const d = [...this.state.disable]
    const i = event.target.value

    c.length = this.props.pizza.toppingVariants.length
    c[i] = event.target.checked

    if(c.filter(v => v).length == 3){
      c.map((v, k) => {
        d[k] = !v
      })
    } else {
      c.map((_, k) => d[k] = false )
    }

    this.setState({
      checked: c,
      disable: d
    })

    this.props.setTopping(c, d)
  }

  render() {
    return <PizzaTopping {...this.state} variants={this.props.pizza.toppingVariants} onTopping={this.handleTopping} onAddCart={this.addToCart} onCheckout={this.onCheckout} 
      canPress={this.props.pizza.sauceVariants.length !== 0 && this.props.pizza.baseVariants.length !== 0}
    />
  }
}

export default connect((store) => ({pizza: store.pizza, cart: store.cart}), {changeField, setTopping, fetchToppings, resetFields, addToCart})(PizzaToppingContainer)