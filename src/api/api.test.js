import api from './api'
import firebase from './firebase'
import service from './service'
import { errorHandler } from './utils/helpers'

jest.mock('./firebase')
jest.mock('./service')
jest.mock('./utils/helpers')

const accessToken = 'IAmAnAccessToken'
const data = 'IAmAData'
const error = 'IAmAError'
const product = 'IAmAProduct'
const productId = 'IAmAnId'

describe('api', () => {
    describe('getDetails', () => {
        test('make request to get access token and then to product details api', async () => {
            firebase.getAccessToken.mockImplementation(() => Promise.resolve({ accessToken }))
            service.getProductDetails.mockImplementation(() => Promise.resolve({ data }))

            const result = await api.getDetails({ productId })

            expect(firebase.getAccessToken).toHaveBeenCalled()
            expect(service.getProductDetails).toHaveBeenCalledWith({ accessToken, productId })
            expect(result).toEqual({ data })
        })

        test('calls error handler when get access token request fails', async () => {
            firebase.getAccessToken.mockRejectedValue(error)

            await api.getDetails({ productId })

            expect(firebase.getAccessToken).toHaveBeenCalled()
            expect(service.getProductDetails).not.toHaveBeenCalled()
            expect(errorHandler).toHaveBeenCalledWith(error)
        })

        test('calls error handler when get product details request fails', async () => {
            firebase.getAccessToken.mockImplementation(() => Promise.resolve({ accessToken }))
            service.getProductDetails.mockRejectedValue(error)

            await api.getDetails({ productId })

            expect(firebase.getAccessToken).toHaveBeenCalled()
            expect(service.getProductDetails).toHaveBeenCalledWith({ accessToken, productId })
            expect(errorHandler).toHaveBeenCalledWith(error)
        })
    })

    describe('getProducts', () => {
        test('make request to get access token and then to search products api', async () => {
            firebase.getAccessToken.mockImplementation(() => Promise.resolve({ accessToken }))
            service.searchProducts.mockImplementation(() => Promise.resolve({ data }))

            await api.getProducts({ product })

            expect(firebase.getAccessToken).toHaveBeenCalled()
            expect(service.searchProducts).toHaveBeenCalledWith({ accessToken, product })
        })

        test('calls error handler when get access token request fails', async () => {
            firebase.getAccessToken.mockRejectedValue(error)

            await api.getProducts({ product })

            expect(firebase.getAccessToken).toHaveBeenCalled()
            expect(service.searchProducts).not.toHaveBeenCalled()
            expect(errorHandler).toHaveBeenCalledWith(error)
        })

        test('calls error handler when get product details request fails', async () => {
            firebase.getAccessToken.mockImplementation(() => Promise.resolve({ accessToken }))
            service.searchProducts.mockRejectedValue(error)

            await api.getProducts({ product })

            expect(firebase.getAccessToken).toHaveBeenCalled()
            expect(service.searchProducts).toHaveBeenCalledWith({ accessToken, product })
            expect(errorHandler).toHaveBeenCalledWith(error)
        })
    })
})