import getProductDetail from '../api/fixtures/getProductDetails'
import searchProductsMock from './fixtures/searchProducts'

const getProductDetails = async ({ productId }) => {
    console.log(productId)

    const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(getProductDetail)
        }, 1000)
    })

    return response

}

const searchProducts = async ({ product }) => {
    console.log(product)

    const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(searchProductsMock)
        }, 1000)
    })

    return response
}

export default {
    getProductDetails,
    searchProducts,
}