import * as React from 'react'
import {connect} from 'react-redux'

import {changeField, setSauce, setSauceMix, fetchSauces} from '../actions/pizza'
import PizzaSauce from './PizzaSauce';

class PizzaSauceContainer extends React.PureComponent {
  state = {
    value: 0,
    mixed: false
  }

  componentDidMount(){
    // Simulate db request.
    if(this.props.store.pizza.sauceVariants.length == 0){
      this.props.fetchSauces()
    }

    this.setState({
      value: this.props.store.pizza.sauce,
      mixed: this.props.store.pizza.sauceMix
    })
  }

  handleButton = () => {
    this.props.changeField(2)
  }

  handleMix = () => {
    this.props.setSauceMix(!this.state.mixed)
    this.setState({mixed: !this.state.mixed})
  }

  handleChange = (_, value) => {
    this.setState({value})
    this.props.setSauce(value)
  }

  render() {
    return <PizzaSauce {...this.state} variants={this.props.store.pizza.sauceVariants} onChange={this.handleChange} onButton={this.handleButton} onMixClick={this.handleMix}/>
  }
}

export default connect((store) => ({store}), {changeField, setSauce, setSauceMix, fetchSauces})(PizzaSauceContainer)