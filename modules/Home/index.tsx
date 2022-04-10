import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import Header from './components/header'
import useStyles from './style'
import Filters from './components/filters'
import Products from './components/products'
import { Grid } from '@material-ui/core'
import productsData from '../../data.json'
import { BsSliders } from 'react-icons/bs'
import MobileFilters from './components/MobileFilters'
import Router from 'next/router'

const Home = () => {
  const parsed = Router?.router?.query
  const page = parsed?.page || 1
  let pageSize: number | undefined = 6

  const [productsCount, setProductsCount] = useState<number>(pageSize)
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false)

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     pageSize = document.documentElement.clientWidth < 976 ? 4 : 6
  //     console.log(pageSize, document.documentElement.clientWidth)
  //   }
  // })

  console.log(productsCount)
  const handleChangeRoute = (_, value: number) => {
    Router.push({ query: { ...Router?.router?.query, page: value } })
  }

  const classes = useStyles()
  return (
    <div>
      <Header />
      <div className={classes.filters_icon}>
        <BsSliders onClick={() => setShowMobileFilters(!showMobileFilters)}  />
      </div>
      <h2 className={classes.h2}>Materials / <span className={classes.span}> Premium Photos </span></h2>
        {/* <MobileFilters /> */}
      <Grid container>
        <Filters showMobileFilters={showMobileFilters} />
        <Products setProductsCount={setProductsCount} page={+page} pageSize={pageSize} />
      </Grid>
      <div className={classes.div_pagination_container}>
        <Pagination count={Math.ceil(productsCount / pageSize)} shape="rounded" onChange={handleChangeRoute} page={+page} />
      </div>
    </div>
  )
}

export default Home