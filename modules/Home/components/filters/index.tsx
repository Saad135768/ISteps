import React from 'react'
import { Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { FormControlLabel } from '@material-ui/core'
import useStyles from './style'

const Filters = () => {
    const classes = useStyles()
  return (
      <Grid item xs={12} md={3}>
        <aside className={classes.aside} >
            <div style={{ borderBottom: '1px solid #C2C2C2' }}>
                <h6 className={classes.h6}>Materials</h6>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label={'Wood'}
                        labelPlacement='end'
                        
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label={'Brick'}
                        labelPlacement='end'
                        
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label={'Glass'}
                        labelPlacement='end'
                        
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label={'Concrete'}
                        labelPlacement='end'
                        
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label={'Carbon Fiber'}
                        labelPlacement='end'
                        
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label={'Steel'}
                        labelPlacement='end'
                        
                    />
                </div>

                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label={'Copper'}
                        labelPlacement='end'
                        
                    />
                </div>
            </div>

            <div>
                <h6 className={classes.h6}>Price range</h6>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label={'Lower than $20'}
                        labelPlacement='end'
                        
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label={'$20 - $100'}
                        labelPlacement='end'
                        
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label={'$110 - $200'}
                        labelPlacement='end'
                        
                    />
                </div>
                        <div>
                            <FormControlLabel
                                control={<Checkbox color="primary" 
                                // checkedIcon={<div className={classes.FilterCheckIcon}/>}
                                // icon={<div className={`${classes.FilterCheckIconBefore} FilterCheckIconBefore`}/>}
                                />}
                                label={'more than $200'}
                                labelPlacement='end'
                                // onChange={handleChange}
                                // value={element._id}
                                // checked={!!query?.[paramName]?.includes(element._id)}
                                
                            />
                        </div>
            </div>
        </aside>
      </Grid>
  )
}

export default Filters