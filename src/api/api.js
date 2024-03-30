import { errorHandler } from './utils/helpers'
import firebase from './firebase'
import service from './service'

const getDetails = async ({ productId }) => {
    try {
        const { accessToken } = await firebase.getAccessToken()
        const data = await service.getProductDetails({ accessToken, productId })
        return data
    } catch (error) {
        errorHandler(error)
    }
}

const getProducts = async ({ product }) => {
    try {
        const { accessToken } = await firebase.getAccessToken()
        const data = await service.searchProducts({ accessToken, product })
        const { results } = data
        return results
    } catch (error) {
        errorHandler(error)
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getDetails,
    getProducts,
}
