import * as React from 'react'
import {withStyles} from '@material-ui/core/styles'

import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Checkbox} from '@material-ui/core';

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

function PizzaSauce({variants, value, mixed, onChange, onButton, onMixClick}){
  return (
    <FormControl component="fieldset" className={styles.formControl}>
      <FormLabel component="legend">Select your sause</FormLabel>
      <RadioGroup
        aria-label="Sauce"
        name="sauce"
        className={styles.group}
        value={String(value)}
        onChange={onChange}
      >
        {
          variants.map((value, key) => {
            return <FormControlLabel key={key} disabled={mixed} value={String(key)} control={<Radio />} label={value + ' sauce'} />
          })
        }
      </RadioGroup>
      <FormControlLabel control={<Checkbox checked={mixed} onClick={onMixClick} value="Mix it up" />} label="Mix it up"/>
      <Button checked={mixed} variant="contained" color="secondary" onClick={onButton}>next!</Button>
    </FormControl>
  )
}



export default withStyles({styles})(PizzaSauce)