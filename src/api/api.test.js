import api from './api'
import service from './service'
import { errorHandler } from './utils/helpers'

jest.mock('./service')
jest.mock('./utils/helpers')

const data = 'IAmAData'
const error = 'IAmAError'
const product = 'IAmAProduct'
const productId = 'IAmAnId'

describe('api', () => {
    describe('getDetails', () => {
        test('make request to get access token and then to product details api', async () => {
            service.getProductDetails.mockImplementation(() => Promise.resolve({ data }))

            const result = await api.getDetails({ productId })

            expect(service.getProductDetails).toHaveBeenCalledWith({ productId })
            expect(result).toEqual({ data })
        })

        test('calls error handler when get product details request fails', async () => {
            service.getProductDetails.mockRejectedValue(error)

            await api.getDetails({ productId })

            expect(service.getProductDetails).toHaveBeenCalledWith({ productId })
            expect(errorHandler).toHaveBeenCalledWith(error)
        })
    })

    describe('getProducts', () => {
        test('make request to get access token and then to search products api', async () => {
            service.searchProducts.mockImplementation(() => Promise.resolve({ data }))

            await api.getProducts({ product })

            expect(service.searchProducts).toHaveBeenCalledWith({ product })
        })

        test('calls error handler when get product details request fails', async () => {
            service.searchProducts.mockRejectedValue(error)

            await api.getProducts({ product })

            expect(service.searchProducts).toHaveBeenCalledWith({ product })
            expect(errorHandler).toHaveBeenCalledWith(error)
        })
    })
})