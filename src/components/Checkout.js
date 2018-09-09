import * as React from 'react'
import {withStyles} from '@material-ui/core/styles'

import {Paper, Table, TableHead, TableRow, TableBody, TableCell, Button, TableFooter, Checkbox, FormControlLabel} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoneyIcon from '@material-ui/icons/CreditCard';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  button: {
    fontSize: '5px',
    margin: theme.spacing.unit,
  },
})

function Checkout({pizzas, onDelete, onDroneDelivery, drone, total}){
  return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead className={styles.head}>
          <TableRow>
            <CustomTableCell>Base</CustomTableCell>
            <CustomTableCell>Sauce</CustomTableCell>
            <CustomTableCell>Toppings</CustomTableCell>
            <CustomTableCell numeric>Price</CustomTableCell>
            <CustomTableCell>Actions</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            pizzas.map((pizza, index) => {
              return (
                <TableRow key={index}>
                <CustomTableCell>{pizza.base}</CustomTableCell>
                <CustomTableCell>{pizza.sauce}</CustomTableCell>
                <CustomTableCell>{pizza.toppings}</CustomTableCell>
                <CustomTableCell numeric>&euro; {pizza.price}</CustomTableCell>
                <CustomTableCell>
                  <Button variant="fab" color="secondary" aria-label="Delete" className={styles.button} onClick={() => onDelete(index)}><DeleteIcon /></Button>
                </CustomTableCell>
              </TableRow>
              )
            })
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell><FormControlLabel control={<Checkbox checked={drone} onClick={onDroneDelivery} value="drone" />} label="Drone Delivery? (+10%)"/></TableCell>
            <TableCell numeric>&euro; {total}</TableCell>
            <TableCell><Button variant="fab" color="primary" aria-label="Pay" onClick={() => alert(`Money to pay: ${total}`)} className={styles.button}><MoneyIcon /></Button></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  )
}

export default withStyles({styles})(Checkout)