import { useState } from 'react'
import api from '../api'

const useSearchProducts = ({ product }) => {
    const [productsList, setProductsList] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const isEmpty = !productsList.length && Boolean(product)

    const getProductsAvailable = async () => {
        setIsLoading(true)
        try {
            const { results } = await api.searchProducts({ product })
            setProductsList(results)
        } catch {
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }


    return {
        getProductsAvailable,
        isEmpty,
        isError,
        isLoading,
        productsList,
        renderContent: !isError && !isEmpty,
        renderInitialState: isEmpty && !Boolean(product),
    }
}

export default useSearchProducts