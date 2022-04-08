import Image from 'next/image'
import React, { FC } from 'react'
import img from '../../../../../public/images/images.jpg'
import useStyles from './style'

interface IProduct {
  id: string
  name: string
  category: string
  currency: string
  price: number
  bestseller: boolean
  featured: boolean
  details: boolean
  image: { src: string; alt: string }
  weight?: number
  thickness?: number
  description?: string
  recommendations?: { src: string; alt: string }[]
}

const Product: FC<{ product: IProduct }> = ({ product }) => {
    const classes = useStyles()
  return (
    <div className={classes.div_container}>
        {product?.bestseller && <span className={classes.span}>Best Seller</span>}
        <Image src={product?.image.src || img} width={280} height={350} alt={''} />
        <button className={classes.button}>Add to cart</button>
        <p className={classes.p_material}>{product?.name} </p>
        <p className={classes.p_name}>{product?.category} </p>
        <p className={classes.p_price}>${product?.price}</p>
    </div>
  )
}

export default Product