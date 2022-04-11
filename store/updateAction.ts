import { IProduct } from '../interface/IProducts'

export default function updateProductsToCart (state: { products: {[key: number]: IProduct}}, payload) {
  return {
    ...state,
    ...payload
  }
}

