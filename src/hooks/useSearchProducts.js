import { useState } from 'react'
import api from '../api'

const useSearchProducts = () => {
    const [productsList, setProductsList] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const getProductsAvailable = async ({ product }) => {
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
        isEmpty: !productsList.length,
        isError,
        isLoading,
        productsList,
    }
}

export default useSearchProducts