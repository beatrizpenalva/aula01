const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_KEY = process.env.REACT_APP_CLIENT_SECRET
export const SITE_ID = 'MLB'

export const BASE_URL = 'https://api.mercadolibre.com/'
export const TOKEN_URL = `${BASE_URL}oauth/token`

export const getProductDetailsUrl = productId => `${BASE_URL}items/${productId}?include_attributes=all`

const createNewRefreshToken = ({ lastRefreshToken }) => {
    const body = `grant_type=refresh_token&client_id=${CLIENT_ID}&client_secret=${CLIENT_KEY}&refresh_token=${lastRefreshToken}`

    const data = fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/x-www-form-urlencoded'
        },
        body,
    }).then(response => response.json())

    return data
}

const getProductDetails = async ({ productId }) => {
    const url = getProductDetailsUrl(productId)
    const data = await fetch(url).then(response => response.json())
    return data
}

const searchProducts = async ({ accessToken, product }) => {
    const url = `${BASE_URL}sites/${SITE_ID}/search?q=${product}`

    const data = await fetch(url).then(response => response.json())
    return data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createNewRefreshToken,
    getProductDetails,
    searchProducts,
}