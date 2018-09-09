import * as React from 'react'
import {withStyles} from '@material-ui/core/styles'

import {FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Button} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
})

function PizzaBase({variants, value, onChange, variant, color, onButton}){
  return (
    <FormControl component="fieldset" className={styles.formControl}>
      <FormLabel component="legend">Select your size</FormLabel>
      <RadioGroup
        aria-label="Base"
        name="base"
        className={styles.group}
        value={String(value)}
        onChange={onChange}
      >
        {
          variants.map((value, key) => {
            return <FormControlLabel key={key} value={String(key)} control={<Radio />} label={value} /> 
          })
        }
      </RadioGroup>
      <Button variant="contained" color="secondary" onClick={onButton}>next!</Button>
    </FormControl>
  )
}

export default withStyles({styles})(PizzaBase)