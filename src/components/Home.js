import * as React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import PizzaBaseContainer from './PizzaBaseContainer'
import PizzaSauceContainer from './PizzaSauceContainer'
import PizzaToppingContainer from './PizzaToppingContainer'
import CheckoutContainer from './CheckoutContainer'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

function Home({value}){
  switch(value){
    case 0: return <TabContainer><PizzaBaseContainer /></TabContainer>
    case 1: return <TabContainer><PizzaSauceContainer /></TabContainer>
    case 2: return <TabContainer><PizzaToppingContainer /></TabContainer>
    case 3: return <TabContainer><CheckoutContainer /></TabContainer>

    default:
      return <TabContainer><PizzaBaseContainer /></TabContainer>
  }
}

const styles = {}

export default withStyles({styles})(Home)