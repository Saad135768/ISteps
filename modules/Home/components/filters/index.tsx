import React, { FC } from 'react'
import { Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { FormControlLabel } from '@material-ui/core'
import useStyles from './style'
import productsData from '../../../../data.json'
import MobileFilters from '../MobileFilters'
import Router from 'next/router'
import { omit } from 'ramda'
import queryString from 'query-string'

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
    if (e.target.value === query?.['category']) {
        return Router.push({ query: omit(['category'], { ...query }) }, undefined, { scroll: false })
    }

    else if (Array.isArray(query?.['category']) && (query?.['category']?.includes(e.target.value))) {
        const deselect = query?.['category'].filter((q) => q !== e.target.value)
        Router.push({ query: omit(['category'], { ...query }), query: {...query, ['category']: deselect }}, undefined, { scroll: false })
    }

    else if(((query?.['category']) && (e.target.value !== query?.['category']))) {
          // select multiple filters in same category
          Router.push(`?${queryString.stringify(query)}&${['category']}=${e.target.value}&page=1`, undefined, { scroll: false })
    }

    else {
          // Select for first time
        Router.push({ query: { ...query, ['category']: e.target.value, page: 1 } }, undefined, { scroll: false })
      }
    }
    

    if(Array.isArray(query?.page)) {
        omit(['page'], { ...query})
        Router.push({ query: { ...query, page: 1 }}, undefined, { scroll: false } )
      }


      const hanldeFilterByPrice = (e) => {
        // if (e.target.value === query?.price) {
        //     // deselect
        //     return Router.push({ query: omit(['price'], { ...query }), ...query }, undefined, { scroll: false })
        // } else {
            Router.push({ query: { ...query?.cateogry, page: 1, price: e.target.value } }, undefined, { scroll: false })
        // }
        
      }

  const classes = useStyles()
  return (
    <>
      <Grid item xs={12} md={3}>
        <aside className={classes.aside}>
          <div style={{ borderBottom: '1px solid #C2C2C2' }}>
            <h6 className={classes.h6}>Materials</h6>
            {categories.map((category) => (
              <div key={category}>
                <FormControlLabel
                  control={<Checkbox color='primary' />}
                  label={category}
                  labelPlacement='end'
                  onChange={(e) =>
                    handleChangeFilteringCategories(e)
                  }
                  value={category}
                  checked={query?.category?.includes(category)}
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
                value={156}
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
        />
      )}
    </>
  )
}

export default Filters
