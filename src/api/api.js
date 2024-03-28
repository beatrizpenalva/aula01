const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_KEY = process.env.REACT_APP_CLIENT_SECRET
const CODE_ID = process.env.REACT_APP_CODE
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
const SITE_ID = 'MLB'

const BASE_URL = 'https://api.mercadolibre.com/'
const TOKEN_URL = `${BASE_URL}oauth/token`

const getProductDetails = async ({ productId, token }) => {
    const url = `${BASE_URL}products${productId}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    })

    return response.json()
}

const getSessionToken = async () => {
    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            accept: 'application/json'
        },
        body: `grant_type=authorization_code&client_id=${CLIENT_ID}&client_secret=${CLIENT_KEY}&code=${CODE_ID}&redirect_uri=${REDIRECT_URI}`
    })

    return response
}

const searchProducts = async ({ product, token }) => {
    const url = `${BASE_URL}products/search?status=active&site_id=${SITE_ID}&q=${product}`

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    })
    return response.json()
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getProductDetails,
    getSessionToken,
    searchProducts,
}
