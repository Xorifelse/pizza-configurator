import * as React from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Badge from '@material-ui/core/Badge';

import BaseIcon from '@material-ui/icons/Brightness1'
import SauceIcon from 'mdi-react/SoySauceIcon'
import ToppingIcon from 'mdi-react/PizzaIcon'
import CartIcon from 'mdi-react/CartIcon'

import Home from './Home'

import {changeField} from '../actions/pizza'
import {getPricePizza, formatCurrency} from '../lib/prices'

class HomeContainer extends React.Component{
  state = {
    value: 0,
  }

  calcTotal = (current) => {
    let total = 0.00

    if(current){
      total = getPricePizza(this.props.pizza)
    } else {
      this.props.cart.items.map(pizza => {
        return total += getPricePizza(pizza)
        
      })
    }

    return formatCurrency(total)
  }

  handleChange = (_, value) => {
    this.props.changeField(value)
  }

  componentDidUpdate(){
    if(this.state.value !== this.props.pizza.field){
      this.setState({ value: this.props.pizza.field })
    }
  }

  render(){
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Base" href="#base" icon={<BaseIcon />} />
            <Tab label="Sauce" href="#sauce" icon={<SauceIcon />}/>
            <Tab label="Toppings" href="#topping"icon={<ToppingIcon />} />
            <Tab label={`${this.calcTotal(true)} (${this.calcTotal(false)})`} href="#checkout"icon={
              <Badge badgeContent={this.props.cart.items.length} color="secondary" classes={{ badge: classes.badge }}>
                <CartIcon />
              </Badge>} 
            />
          </Tabs>
        </AppBar>
        <Home {...this.state} />
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
});

export default connect((store) => ({pizza: store.pizza, cart: store.cart}), {changeField})(withStyles(styles)(HomeContainer))