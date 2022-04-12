import React, { FC, useState } from 'react'
import { Grid } from '@mui/material'
import useStyles from './style'
import Image from 'next/image'
import { IProduct } from '../../../../interface/IProducts'
import productsData from '../../../../data.json'
import { useStateMachine } from 'little-state-machine'
import updateProductsToCart from '../../../../store/updateAction'

const Header: FC = () => {
  const { actions, state } = useStateMachine({ updateProductsToCart })
  
  // This variable filters the fetched data to get the object with the recommendations products
  const filteredProduct = productsData.products.find(({ details }) => details)

  const [selectedImg, setSelectedImg] = useState(filteredProduct)

  // This function filters the selected img from the recommendation arrays and make it the selected img { image: selectedImage }, and replace it with the preSelectedImage
  const handleClickSelectImg: (value: { src: string; alt: string}) => void = (img) => {
    const preSelectedImg = selectedImg?.image

    setSelectedImg({ ...selectedImg,
      details: {...selectedImg?.details, recommendations: [...selectedImg?.details?.recommendations?.filter(({ src }) => src !== img?.src), preSelectedImg]},
      image: img
    })
  }

  const handleAddToCart = () => actions.updateProductsToCart({ ...state, products: {...state.products, [selectedImg.id]: selectedImg } })
  

  const classes = useStyles()
  return (
    <header className={classes.header}>
      <div className={classes.div}>
      <div className={classes.div_wrapper}>
        <h1>{selectedImg?.name}</h1>
        <span>
          <button className={classes.btn} onClick={handleAddToCart}>Add to cart</button>
        </span>
      </div>

      <div className={classes.div_bgImg_wrapper}> 
        {selectedImg?.featured && <span className={classes.span_featured}> Featured</span>}
        <Image src={selectedImg?.image?.src} layout='responsive' width={1280} height={550} alt={selectedImg?.image?.alt} />
        </div>
      </div>

      <div>
        <Grid container className={classes.Grid_container}>
          <Grid item xs={12} sm={6}>
            <h4 className={classes.h4}> Materials people also use </h4>
              <div className={classes.div_imgs_wrapper}>
                { selectedImg?.details?.recommendations?.map(({ src, alt }) => <Image src={src} width={117} height={147} alt={alt} key={src} onClick={() => handleClickSelectImg({ src, alt })} /> )}
              </div>

              <p className={classes.h4}>Details</p>
              <p className={classes.p}>Weight: <span>{selectedImg?.details?.weight}/m2</span> </p>
              <p className={classes.p}>Thickness: <span>{selectedImg?.details?.thickness}cm</span> </p>
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