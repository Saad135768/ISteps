import React, { useState } from 'react'
import useStyles from './style'
import logo from '../../public/images/logo.bmp'
import Image from 'next/image'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import img from '../../public/images/2641396.jpg'
import { useStateMachine } from 'little-state-machine'
import updateProductsToCart from '../../store/updateAction'
import clearAction from '../../store/clearAction'

const Navbar = () => {
    const [toggleQuickCart, setToggleQuickCart] = useState<boolean>()
    const { actions, state } = useStateMachine({ updateProductsToCart, clearAction })
    console.log({ state })
    const classes = useStyles()
    return (
    <nav className={classes.nav}>
        <span className={classes.span_logo_container}>
            <Image src={logo} width={300} height={120} alt="logo"/>
        </span>

        <span className={classes.span_icon_wrapper}>
            <ShoppingCartOutlinedIcon fontSize="large" onClick={() => setToggleQuickCart(!toggleQuickCart)} />
            <span className={classes.span_cart_counter}>1</span>
           {toggleQuickCart && <div className={classes.div_quick_cart_container}>
                <span className={classes.span_close_btn} onClick={() => setToggleQuickCart(false)}>X</span>
                <div className={classes.div_products_wrapper}>
                    <div>
                        <p className={classes.p_product_name}>Recylced Plastic</p>
                        <p className={classes.p_price} >$1000.00</p>
                    </div>
                    <Image src={img} width={150} height={92} alt={''} />
                </div>
                <hr />
                <button className={classes.button} onClick={() => { 
                    actions.clearAction(undefined) 
                    setToggleQuickCart(false)
                    }}>Clear</button>
            </div>}
        </span>
    </nav>
  )
}

export default Navbar