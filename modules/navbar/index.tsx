import React, { useState, Fragment } from 'react'
import useStyles from './style'
import logo from '../../public/images/logo.bmp'
import Image from 'next/image'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import img from '../../public/images/2641396.jpg'
import { useStateMachine } from 'little-state-machine'
import updateProductsToCart from '../../store/updateAction'
import clearAction from '../../store/clearAction'
import { IProduct } from './../../interface/IProducts'
import { pathOr, propOr } from 'ramda'

const Navbar = () => {
  const [toggleQuickCart, setToggleQuickCart] = useState<boolean>()

  const { actions, state } = useStateMachine({
    updateProductsToCart,
    clearAction,
  })

  const productsInFormOfArray = Object.values(propOr({}, ['products'], state))

  const classes = useStyles()
  return (
    <nav className={classes.nav}>
      <span className={classes.span_logo_container}>
        <Image src={logo} width={300} height={120} alt='logo' />
      </span>

      <span className={classes.span_icon_wrapper}>
        <ShoppingCartOutlinedIcon
          fontSize='large'
          onClick={() => setToggleQuickCart(!toggleQuickCart)}
        />
        <span className={classes.span_cart_counter}>
          {productsInFormOfArray?.length}
        </span>
        {toggleQuickCart && (
          <div className={classes.div_quick_cart_container}>
            <span
              className={classes.span_close_btn}
              onClick={() => setToggleQuickCart(false)}
            >
              X
            </span>

            {productsInFormOfArray.map((product: IProduct) => (
              <Fragment key={product.id}>
                <div className={classes.div_products_wrapper}>
                  <div>
                    <p className={classes.p_product_name}>
                      {propOr('Products name', ['name'], product)}
                    </p>
                    <p className={classes.p_price}>
                      ${propOr('-', ['price'], product)}
                    </p>
                  </div>
                  <Image
                    src={pathOr(img, ['image', 'src'], product)}
                    width={150}
                    height={92}
                    alt={''}
                  />
                </div>
                <hr />
              </Fragment>
            ))}

            {!productsInFormOfArray?.length && (
              <div className={classes.div_products_wrapper}>
                <h2>No products found</h2>
              </div>
            )}

            <button
              className={classes.button}
              onClick={() => {
                actions.clearAction(undefined)
                setToggleQuickCart(false)
              }}
            >
              Clear
            </button>
          </div>
        )}
      </span>
    </nav>
  )
}

export default Navbar
