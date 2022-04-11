import React, { FC } from 'react'
import useStyles from './style'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Router from 'next/router'
import { omit } from 'ramda'
interface IProps {
  categories: string[]; 
  prices: { minPrice: number, averagePrice: number, maxPrice: number}
  handleChangeFilteringCategories: (e: any) => Promise<boolean> | any
  hanldeFilterByPrice: (e: any) => Promise<boolean> | any
}

const MobileFilters: FC<IProps> = ({ categories, prices: { minPrice, maxPrice, averagePrice }, handleChangeFilteringCategories, hanldeFilterByPrice }) => {

  const query = Router?.router?.query

 
  const classes = useStyles()
  return (
    <>
      <div className={classes.div_container}>
        <Accordion>
          <AccordionSummary
            expandIcon={<span>X</span>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <span>Filter</span>
          </AccordionSummary>
          <AccordionDetails>
            <div>

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
                  </div>

          </AccordionDetails>


          <div className={classes.div_btns_wrapper}>
            <button onClick={() => Router.push({ query: { 'page': 1 } }, undefined, { scroll: false })}>Clear</button>
            <button>Save</button>
          </div>
        </Accordion>
      </div>
    </>
  )
}

export default MobileFilters
