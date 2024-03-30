import { renderHook, waitFor } from '@testing-library/react'
import api from '../api'
import useProductDetails from './useProductDetails'

jest.mock('../api')

const mockResponse = { info: 'IAmAnInfo' }
const productId = 'IAmAnId'

describe('useProductDetails', () => {
    test('make request with properly param and returns details info when request succeed', async () => {
        api.getDetails.mockImplementationOnce(() => Promise.resolve(mockResponse))

        const { result } = renderHook(() => useProductDetails({ productId }))

        result.current.getProductDetails()

        await waitFor(() => expect(api.getDetails).toHaveBeenCalledWith({ productId }))
        expect(result.current.isLoading).toBe(false)

        await waitFor(() => expect(result.current.isError).toBe(false))
        expect(result.current.details).toEqual(mockResponse)
    })

    test('returns isError as true when is not fetching and request fails', async () => {
        api.getDetails.mockRejectedValue(() => Promise.reject())

        const { result } = renderHook(() => useProductDetails({ productId }))

        result.current.getProductDetails()

        await waitFor(() => expect(api.getDetails).toHaveBeenCalledWith({ productId }))
        expect(result.current.isLoading).toBe(false)

        await waitFor(() => expect(result.current.isError).toBe(true))
        expect(result.current.details).toEqual({})
    })

    test('returns isError as true when is not fetching and request response is a empty object', async () => {
        api.getDetails.mockImplementationOnce(() => Promise.resolve({}))

        const { result } = renderHook(() => useProductDetails({ productId }))

        result.current.getProductDetails()

        await waitFor(() => expect(api.getDetails).toHaveBeenCalledWith({ productId }))
        expect(result.current.isLoading).toBe(false)

        await waitFor(() => expect(result.current.isError).toBe(true))
        expect(result.current.details).toEqual({})
    })
})