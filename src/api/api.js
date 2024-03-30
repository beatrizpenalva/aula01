import { errorHandler } from './utils/helpers'
import service from './service'

const getDetails = async ({ productId }) => {
    try {
        const data = await service.getProductDetails({ productId })
        return data
    } catch (error) {
        errorHandler(error)
    }
}

const getProducts = async ({ product }) => {
    try {
        const data = await service.searchProducts({ product })
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
