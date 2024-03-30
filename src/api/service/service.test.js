import { createNewRefreshToken, getProductDetails, searchProducts, BASE_URL, SITE_ID, TOKEN_URL } from './service'

describe('service', () => {
    describe('createNewRefreshToken', () => {
        test('call fetch with properly url, headers, method and body', async () => {
            global.fetch = jest.fn(() => Promise.resolve({
                json: () => Promise.resolve()
            }))

            await createNewRefreshToken({ lastRefreshToken: 'IAmAToken' })

            expect(global.fetch).toHaveBeenCalledWith(TOKEN_URL, {
                method: 'POST',
                body: 'grant_type=refresh_token&client_id=IAmAnId&client_secret=IAmASecret&refresh_token=IAmAToken',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/x-www-form-urlencoded'
                },
            })
        })
    })

    describe('getProductDetails', () => {
        test('call fetch with properly url, headers and method', async () => {
            global.fetch = jest.fn(() => Promise.resolve({
                json: () => Promise.resolve()
            }))

            await getProductDetails({ accessToken: 'IAmAToken', productId: 'IAmAnId' })

            const url = `${BASE_URL}items/IAmAnId`

            expect(global.fetch).toHaveBeenCalledWith(url, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer IAmAToken',
                    'Content-type': 'application/json',
                },
            })
        })
    })

    describe('searchProducts', () => {
        test('call fetch with properly url, headers and method', async () => {
            global.fetch = jest.fn(() => Promise.resolve({
                json: () => Promise.resolve()
            }))

            await searchProducts({ accessToken: 'IAmAToken', product: 'IAmAProduct' })

            const url = `${BASE_URL}sites/${SITE_ID}/search?q=IAmAProduct`

            expect(global.fetch).toHaveBeenCalledWith(url, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer IAmAToken',
                    'Content-type': 'application/json',
                },
            })
        })
    })
})