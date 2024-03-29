const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_KEY = process.env.REACT_APP_CLIENT_SECRET
const CODE = process.env.REACT_APP_CODE
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
const SITE_ID = 'MLB'

const BASE_URL = 'https://api.mercadolibre.com/'
const TOKEN_URL = `${BASE_URL}oauth/token`

const getSessionToken = () => {
    const sessionTokens = fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=authorization_code&client_id=${CLIENT_ID}&client_secret=${CLIENT_KEY}&code=${CODE}&redirect_uri=${REDIRECT_URI}`
    }).then(r => r.json())

    return sessionTokens
}


const getProductDetails = async ({ productId, token }) => {
    const url = `${BASE_URL}products/${productId}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    })

    return response.json()
}

const searchProducts = async ({ product, token }) => {
    const url = `${BASE_URL}sites/${SITE_ID}/search?q=${product}`
    const data = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    }).then(response => response.json())

    return data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getProductDetails,
    getSessionToken,
    searchProducts,
}
