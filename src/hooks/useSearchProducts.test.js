import { act, renderHook, waitFor } from '@testing-library/react'
import api from '../api'
import useSearchProducts from './useSearchProducts'

jest.mock('../api')

const mockResponse = [{ info: 'IAmAnInfo' }]
const product = 'IAmAProduct'

describe('useSearchProducts', () => {
    test('returns render content as true and products list when request succeed', async () => {
        api.getProducts.mockImplementationOnce(() => Promise.resolve(mockResponse))

        const { result } = renderHook(() => useSearchProducts())

        await act(async () => {
            result.current.getProductsAvailable(product)
        })

        await waitFor(() => expect(api.getProducts).toHaveBeenCalledWith({ product }))

        expect(result.current.productsList).toEqual(mockResponse)
        expect(result.current.isLoading).toBe(false)
        expect(result.current.isError).toBe(false)
        expect(result.current.isEmpty).toBe(false)
        expect(result.current.renderContent).toBe(true)
    })

    test('returns isEmpty as true when request returns an empty data and isError is false', async () => {
        api.getProducts.mockImplementationOnce(() => Promise.resolve([]))

        const { result } = renderHook(() => useSearchProducts())

        await act(async () => {
            result.current.getProductsAvailable(product)
        })

        await waitFor(() => expect(api.getProducts).toHaveBeenCalledWith({ product }))

        expect(result.current.productsList).toEqual([])
        expect(result.current.isLoading).toBe(false)
        expect(result.current.isError).toBe(false)
        expect(result.current.isEmpty).toBe(true)
        expect(result.current.renderContent).toBe(false)
    })

    test('returns isError as true and isEmpty as false when get products request fails', async () => {
        api.getProducts.mockRejectedValue(() => Promise.reject())

        const { result } = renderHook(() => useSearchProducts())

        await act(async () => {
            result.current.getProductsAvailable(product)
        })

        await waitFor(() => expect(api.getProducts).toHaveBeenCalledWith({ product }))

        expect(result.current.productsList).toEqual([])
        expect(result.current.isLoading).toBe(false)
        expect(result.current.isError).toBe(true)
        expect(result.current.isEmpty).toBe(false)
        expect(result.current.renderContent).toBe(false)
    })
})