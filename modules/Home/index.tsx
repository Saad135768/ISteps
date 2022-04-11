import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import Header from './components/header'
import useStyles from './style'
import Filters from './components/filters'
import Products from './components/products'
import { Grid } from '@material-ui/core'
import productsData from '../../data.json'
import { BsSliders } from 'react-icons/bs'
import Router from 'next/router'

const Home = () => {
  const parsed = Router?.router?.query
  const page = parsed?.page || 1

  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false)
  const [pageSize, setPageSize] = useState(6)
  const [productsCount, setProductsCount] = useState<number>(pageSize)

  useEffect(() => {
    const handleResize = () => {
      if(window.document.documentElement.clientWidth > 500) return setPageSize(6)
      if(window.document.documentElement.clientWidth <= 500) return setPageSize(4)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })


  const handleChangeRoute = (_, value: number) => {
    Router.push({ query: { ...Router?.router?.query, page: value } }, undefined, { scroll: false })
  }

  const classes = useStyles()
  return (
    <div>
      <Header />
      <div className={classes.filters_icon}>
        <BsSliders onClick={() => setShowMobileFilters(!showMobileFilters)}  />
      </div>
      <h2 className={classes.h2}>Materials / <span className={classes.span}> Premium Photos </span></h2>

      <Grid container>
        <Filters showMobileFilters={showMobileFilters} />
        <Products setProductsCount={setProductsCount} page={+page} pageSize={pageSize} />
      </Grid>
      <div className={classes.div_pagination_container}>
        <Pagination 
          count={Math.ceil(productsCount / pageSize)} 
          shape="rounded" onChange={handleChangeRoute} 
          page={+page}
          hidePrevButton={+page === 1}
          hideNextButton={+page === Math.ceil(productsCount / pageSize)}
         />
      </div>
    </div>
  )
}

export default Home