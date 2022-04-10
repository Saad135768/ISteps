import { IProduct } from '../interface/IProducts'

export default function updateProductsToCart (state, payload) {
  return {
    // products: [...state],
    ...state,
    ...payload
  }
}
