import React from 'react'
import { Grid } from '@mui/material'
import Product from './product'
import { MdKeyboardArrowDown } from 'react-icons/md'
import useStyle from './style'
import productsData from '../../../../data.json'

const Products = () => {
  const classes = useStyle()
  return (
  <Grid item xs={12} md={9}>
    <div className={classes.div_container}>
      <span className={classes.span_sortBy}>
        Sort By
      </span> 

      <span className={classes.span_price}>
         Price<MdKeyboardArrowDown />
      </span>
    </div>
    <div className={classes.div_products_wrapper}>
      {productsData.products.map((product) => <Product key={product.id} product={product} />)}
    </div>
  </Grid>
  )
}

export default Products