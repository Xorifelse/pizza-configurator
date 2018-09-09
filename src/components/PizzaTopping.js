import * as React from 'react'
import {withStyles} from '@material-ui/core/styles'

import {FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Button} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  }
})

function PizzaSauce({onTopping, onAddCart, onCheckout, variants, checked, disable, canPress}){
  return (
    <div className={styles.root}>
      <FormControl component="fieldset" className={styles.formControl}>
        <FormLabel component="legend">Select your toppings (max 3)</FormLabel>
        <FormGroup>
          {
            variants.map((value, id) => {
              return <FormControlLabel key={id} control={<Checkbox disabled={disable[id]} checked={checked[id] ? true : false} onChange={onTopping} value={String(id)} />} label={value.charAt(0).toUpperCase() + value.slice(1)}/>
            })
          }
        </FormGroup>
        <FormGroup>
          <Button variant="contained" disabled={!canPress} color="secondary" onClick={onAddCart}>Add to Cart!</Button>
          <Button variant="contained" disabled={!canPress} color="primary" onClick={onCheckout}>Checkout</Button>
        </FormGroup>
      </FormControl>
    </div>
  )
}



export default withStyles({styles})(PizzaSauce)