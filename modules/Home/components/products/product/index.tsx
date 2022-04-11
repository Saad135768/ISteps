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

    const addProduct = () => actions.updateProductsToCart({ ...state, products: {...state.products, [product.id]: product } })
  

    const classes = useStyles()
  return (
    <div className={classes.div_container} onMouseEnter={() => setShowAddToCartBtn(true)} onMouseLeave={() => setShowAddToCartBtn(false)}>
        {product?.bestseller && <span className={classes.span}>Best Seller</span>}
        <Image src={product?.image.src || img} width={280} height={350} alt={''} />
       {showAddToCartBtn && <button className={classes.button} onClick={addProduct}>Add to cart</button>}
        <p className={classes.p_material}>{product?.name} </p>
        <p className={classes.p_name}>{product?.category} </p>
        <p className={classes.p_price}>${product?.price}</p>
    </div>
  )
}

export default Product