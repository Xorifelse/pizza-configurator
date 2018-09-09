import * as React from 'react'
import {connect} from 'react-redux'

import PizzaBase from './PizzaBase'
import {changeField, setBase, fetchBases} from '../actions/pizza'

class PizzaBaseContainer extends React.PureComponent {
  state = {
    value: 0,
  }

  componentDidMount(){
    // Simulate db request.
    if(this.props.store.pizza.baseVariants.length === 0){
      this.props.fetchBases()
    }

    this.setState({
      value: this.props.store.pizza.base
    })
  }

  handleButton = () => {
    this.props.changeField(1)
  }

  handleChange = (_, value) => {
    this.setState({value})
    this.props.setBase(value)
  }

  render(){
    return <PizzaBase variants={this.props.store.pizza.baseVariants} value={this.state.value} onChange={this.handleChange} onButton={this.handleButton}/>
  }
}

export default connect((store) => ({store}), {changeField, setBase, fetchBases})(PizzaBaseContainer)