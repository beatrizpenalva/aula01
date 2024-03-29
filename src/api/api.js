import { errorHandler } from './utils'
import { getAccessToken } from './firebase'
import { getProductDetails, searchProducts } from './service'

const getDetails = async ({ productId }) => {
    try {
        const { accessToken } = await getAccessToken()
        const data = await getProductDetails({ accessToken, productId })
        return data.json()
    } catch (error) {
        errorHandler(error)
    }
}

const getProducts = async ({ product }) => {
    try {
        const { accessToken } = await getAccessToken()
        const data = await searchProducts({ accessToken, product })
        console.log(data.json())
        const { results } = data.json()
        console.log(results)
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
