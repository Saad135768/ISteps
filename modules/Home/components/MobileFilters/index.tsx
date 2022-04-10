import React, { FC } from 'react'
import useStyles from './style'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

interface IProps {
  categories: string[]; 
  prices: { minPrice: number, averagePrice: number, maxPrice: number}
}

const MobileFilters: FC<IProps> = ({ categories, prices: { minPrice, maxPrice, averagePrice } }) => {
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

          {categories.map((category) => <div key={category}>
                <FormControlLabel
                  control={<Checkbox color="primary"/>}
                  label={category}
                  labelPlacement='end'
                  
                  />
                </div>)}
                <div>
                <h6 className={classes.h6}>Price range</h6>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label={`Lower than $${minPrice}`}
                        labelPlacement='end'
                        
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label={`$${minPrice} - $${averagePrice}`}
                        labelPlacement='end'
                        
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label={`$${averagePrice + 1} - $${maxPrice}`}
                        labelPlacement='end'
                        
                    />
                </div>
                        <div>
                            <FormControlLabel
                                control={<Checkbox color="primary" 
                                // checkedIcon={<div className={classes.FilterCheckIcon}/>}
                                // icon={<div className={`${classes.FilterCheckIconBefore} FilterCheckIconBefore`}/>}
                                />}
                                label={`more than $${maxPrice}`}
                                labelPlacement='end'
                                // onChange={handleChange}
                                // value={element._id}
                                // checked={!!query?.[paramName]?.includes(element._id)}
                                
                            />
                        </div>
            </div>
                  </div>

          </AccordionDetails>


          <div className={classes.div_btns_wrapper}>
            <button>Clear</button>
            <button>Save</button>
          </div>
        </Accordion>
      </div>
    </>
  )
}

export default MobileFilters
