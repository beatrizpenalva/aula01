const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_KEY = process.env.REACT_APP_CLIENT_SECRET
const SITE_ID = 'MLB'

const BASE_URL = 'https://api.mercadolibre.com/'
const TOKEN_URL = `${BASE_URL}oauth/token`

export const createNewRefreshToken = ({ lastRefreshToken }) => {
    fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=refresh_token&client_id=${CLIENT_ID}&client_secret=${CLIENT_KEY}&refresh_token=${lastRefreshToken}`
    })
}

export const getProductDetails = async ({ accessToken, productId }) => {
    const url = `${BASE_URL}items/${productId}/description`

    const data = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json',
        },
    })

    return data
}

export const searchProducts = async ({ accessToken, product }) => {
    const url = `${BASE_URL}sites/${SITE_ID}/search?q=${product}`

    const data = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json',
        },
    })

    return data
}

