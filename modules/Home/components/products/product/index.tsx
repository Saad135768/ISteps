import React, { FC, useState } from 'react'
import Image from 'next/image'
import img from '../../../../../public/images/images.jpg'
import useStyles from './style'
import { IProduct } from '../../../../../interface/IProducts'
import { useStateMachine } from 'little-state-machine'
import updateProductsToCart from '../../../../../store/updateAction'

const Product: FC<{ product: IProduct }> = ({ product }) => {
    const [showAddToCartBtn, setShowAddToCartBtn] = useState(false)
    const { actions, state } = useStateMachine({ updateProductsToCart })

    // console.log({ state })

    const addProduct = () => {
      // This line checks if the product has already been added
      // const filteredProduct = state?.products?.filter(({ id }) => id === product.id)

      // console.log({ filteredProduct })
      // if(filteredProduct) return
      // return product

      // return {
      //   products: {
      //     [product.id]: product
      //   },
      //   ...state?.products,
      // }
    }
    console.log({ state })
    const classes = useStyles()
  return (
    <div className={classes.div_container} onMouseEnter={() => setShowAddToCartBtn(true)} onMouseLeave={() => setShowAddToCartBtn(false)}>
        {product?.bestseller && <span className={classes.span}>Best Seller</span>}
        <Image src={product?.image.src || img} width={280} height={350} alt={''} />
       {showAddToCartBtn && <button className={classes.button} onClick={() => actions.updateProductsToCart({ product })}>Add to cart</button>}
        <p className={classes.p_material}>{product?.name} </p>
        <p className={classes.p_name}>{product?.category} </p>
        <p className={classes.p_price}>${product?.price}</p>
    </div>
  )
}

export default Product