import React from 'react'
import { Pagination } from '@mui/material'
import Header from './components/header'
import useStyles from './style'
import Filters from './components/filters'
import Products from './components/products'
import { Grid } from '@material-ui/core'

const Home = () => {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <h2 className={classes.h2}>Materials / <span className={classes.span}> Premium Photos </span></h2>

      <Grid container>
        <Filters />
        <Products />
      </Grid>
      <div className={classes.div_pagination_container}>
        <Pagination count={10} shape="rounded" />
      </div>
    </div>
  )
}

export default Home