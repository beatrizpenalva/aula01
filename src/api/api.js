const BASE_URL = 'https://api.mercadolivre.com.br/'
const SITE_ID = 'MLB'

const request = {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        'Content-type': 'application/json',
    },
}

const getProductDetails = async ({ productId }) => {
    const url = `${BASE_URL}products${productId}`
    const response = await fetch(url, request)
    return response.json()

}

const searchProducts = async ({ product }) => {
    const url = `${BASE_URL}products/search?status=active&site_id=${SITE_ID}&q=${product}`
    const response = await fetch(url, request)
    return response.json()
}

export default {
    getProductDetails,
    searchProducts,
}
