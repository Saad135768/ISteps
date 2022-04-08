import { Grid } from '@mui/material'
import React, { FC } from 'react'
import useStyles from './style'
import headerImg from '../../../../public/images/2641396.jpg'
import img1 from '../../../../public/images/images.jpg'
import img2 from '../../../../public/images/2641396jk.jpg'
import img3 from '../../../../public/images/download.jpg'
import Image from 'next/image'

const Header: FC = () => {
    const classes = useStyles()
  return (
    <header className={classes.header}>
      <div className={classes.div_wrapper}>
        <h1>Recycled Plastic</h1>
        <span>
        <button className={classes.btn}>Add to cart</button>
        </span>
      </div>

      <div className={classes.div_bgImg_wrapper}> 
        {true && <span className={classes.span_featured}> Featured</span>}
        <Image src={headerImg} layout='responsive' width={1280} height={550} alt={'name material'} />
      </div>

      <div>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <h4 className={classes.h4}> Materials people also use </h4>
              <div className={classes.div_imgs_wrapper}>
                <Image src={img1} width={117} height={147} alt='' />
                <Image src={img2} width={117} height={147} alt='' />
                <Image src={img3} width={117} height={147} alt='' />
              </div>

              <p className={classes.h4}>Details</p>
              <p className={classes.p}>Weight: <span>2340g/m2</span> </p>
              <p className={classes.p}>Thickness: <span>3cm</span> </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h4 className={classes.h4} >About the Recycled Plastic</h4>
            
            <article className={classes.article}>
            <h4>Plastic</h4>
              <p>
              Plastic recycling is the reprocessing of plastic waste into new and useful products. When performed correctly, this can reduce dependence on landfill, conserve resources and protect the environment from plastic pollution and greenhouse gas emissions. Although recycling rates are increasing, they lag behind those of other recoverable materials, such as aluminium, glass and paper. The global recycling rate in 2015 was 19.5%, while 25.5% was incinerated and the remaining 55% disposed of to landfill. Since the beginning of plastic production in the 20th century, until 2015, the world has produced some 6.3 billion tonnes of plastic waste, only 9% of which has been recycled, and only ~1% has been recycled more than once.[6]
              </p>
            </article>
          </Grid>
        </Grid>
      </div>
    </header>
  )
}

export default Header