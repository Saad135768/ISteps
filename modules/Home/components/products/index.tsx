import React, { useState, useEffect, FC } from 'react'
import { Grid } from '@mui/material'
import Product from './product'
import { CgArrowsExchangeAltV } from 'react-icons/cg'
import useStyle from './style'
import productsData from '../../../../data.json'
import Router from 'next/router'

const Products: FC<{ page: number; pageSize: number, setProductsCount: (value: number) => void}> = ({ page, pageSize, setProductsCount }) => {
  const [sortBy, setSortBy] = useState('price')
  const [sortByAscendingly, setSortByAscendingly] = useState(true)
  const query = Router?.router?.query

  const sortProducts = () => {
    if(sortBy === 'price') return productsData.products?.sort((a, b) => sortByAscendingly ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy])
    
    // Sorting by name
    return productsData.products?.sort((a, b) => sortByAscendingly ? a[sortBy].charCodeAt(a[sortBy][0]) - b[sortBy].charCodeAt(b[sortBy][0]) : b[sortBy].charCodeAt(b[sortBy][0]) - a[sortBy].charCodeAt(a[sortBy][0]))
  }

  const sliceProducts = () => sortProducts().slice((page - 1) * pageSize, (page * pageSize))

  const filterProducts = () => {
    // let filteredProducts
    // if(query?.['price']) {
    //    filteredProducts =  sliceProducts()?.filter(({ price }) => +query?.price === price)
    // } 
    // else {
    //   filteredProducts =  sliceProducts()?.filter(({ category }) => query?.category ? query.category.includes(category) : category)
    // }
    // return filteredProducts
    return sliceProducts()?.filter(({ category }) => query?.category ? query.category.includes(category) : category)?.filter(({ price }) => query?.price? +query?.price === price : price)
  //  setProductsCount(filteredProducts?.length)
  }
  
  useEffect(() => {
    setProductsCount(productsData.products.length)
  }, [])

  const classes = useStyle()

  return (
  <Grid item xs={12} md={9}>
    <div className={classes.div_container}>
      <span className={classes.span_sortBy}>
         <CgArrowsExchangeAltV onClick={() => { 
           setSortByAscendingly(!sortByAscendingly)
           Router.push({ query: { page: 1 } }, undefined, { scroll: false })
           }} className={sortByAscendingly ? classes.rotate : ''} />
        Sort By
      </span> 

      <span className={classes.span_price}>
        <select onChange={(e) => setSortBy(e.target.value)}>
            <option>price</option>
            <option>name</option>
        </select>

      </span>
    </div>
    <div className={classes.div_products_wrapper}>
      {filterProducts().map((product) => <Product key={product.id} product={product} />)}
    </div>
  </Grid>
  )
}

export default Products