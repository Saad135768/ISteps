import React, { FC } from 'react'
import { Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { FormControlLabel } from '@material-ui/core'
import useStyles from './style'
import productsData from '../../../../data.json'
import MobileFilters from '../MobileFilters'
import Router from 'next/router'
import { omit } from 'ramda'

const Filters: FC<{ showMobileFilters: boolean }> = ({ showMobileFilters }) => {

  // Those line are to make filters somehow dynamically, I fetch all categories and filter them to make sure no reptition
  const categories: string[] = [...new Set(productsData.products.map(({ category }) => category))]
  const price: number[] = [ ...new Set(productsData.products.map(({ price }) => price))]

  const minPrice = +Math.min(...price)
  const maxPrice = +Math.max(...price)
  const averagePrice = (maxPrice - minPrice) / 2

  const query = Router?.router?.query

  const handleChangeFilteringCategories = (e) => {
   
    // deselect
    if (query?.['category']?.includes(e.target.value)) {
      if(Array.isArray(query?.['category'])) {
        const category: string[] = query?.['category'].find((p) => p !== e.target.value)
        return Router.push({ query:  { ...query, category } }, undefined, { scroll: false })
      } 
      
      return Router.push({ query: omit(['category'], { ...query }) }, undefined, { scroll: false })
    }
    
    if(query?.['category'] && !Array.isArray(query?.['category'])) {
      return Router.push({ query: { ...query, ['category']: [query?.category, e.target.value], page: 1 } }, undefined, { scroll: false })
    }

    // if 2 category filters are already selected, then remove the first one
    if (Array.isArray(query?.['category'])) {
      const category: string[] = query?.['category']
      return Router.push({ query: { ...query, 'category': [category[1], e.target.value], page: 1 }}, undefined, { scroll: false })
    }
    
    // Select for first time
      return Router.push({ query: { ...query, ['category']: e.target.value, page: 1 } }, undefined, { scroll: false })
  }
    
    const hanldeFilterByPrice = (e) => {
      if (query?.['price'] === e.target.value) { 
        return Router.push({ query: omit(['price'], { ...query }) }, undefined, { scroll: false })
      }
      Router.push({ query: { ...query, page: 1, price: e.target.value } }, undefined, { scroll: false })
    }

  const classes = useStyles()
  return (
    <>
      <Grid item xs={12} md={3}>
        <aside className={classes.aside}>
          <div className={classes.div}>
            <h6 className={classes.h6}>Materials</h6>
            {categories.map((category) => (
              <div key={category}>
                <FormControlLabel
                  control={<Checkbox color='primary' />}
                  label={category}
                  labelPlacement='end'
                  onChange={handleChangeFilteringCategories}
                  value={category}
                  checked={query?.category ? query?.category?.includes(category) : false}
                />
              </div>
            ))}
          </div>

          <div>
            <h6 className={classes.h6}>Price range</h6>
            <div>
              <FormControlLabel
                control={<Checkbox color='primary' />}
                label={`Lower than $${minPrice}`}
                labelPlacement='end'
                value={minPrice - 1}
                onChange={hanldeFilterByPrice}
                checked={+query?.price === (minPrice - 1)}
              />
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox color='primary' />}
                label={`$${minPrice} - $${averagePrice}`}
                labelPlacement='end'
                value={minPrice}
                onChange={hanldeFilterByPrice}
                checked={+query?.price === minPrice}
              />
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox color='primary' />}
                label={`$${averagePrice} - $${maxPrice}`}
                labelPlacement='end'
                value={maxPrice}
                onChange={hanldeFilterByPrice}
                checked={+query?.price === maxPrice}
              />
            </div>

            <div>
              <FormControlLabel
                control={<Checkbox color='primary' />}
                label={`more than $${maxPrice}`}
                labelPlacement='end'
                value={maxPrice + 1}
                onChange={hanldeFilterByPrice}
                checked={+query?.price === (maxPrice + 1)}
              />
            </div>
          </div>

          <button className={classes.button} onClick={() => Router.push({ query: { 'page': 1 } }, undefined, { scroll: false })}>Clear</button>
        </aside>
      </Grid>

      {showMobileFilters && (
        <MobileFilters
          categories={categories}
          prices={{ minPrice, maxPrice, averagePrice }}
          handleChangeFilteringCategories={handleChangeFilteringCategories}
          hanldeFilterByPrice={hanldeFilterByPrice}
        />
      )}
    </>
  )
}

export default Filters
