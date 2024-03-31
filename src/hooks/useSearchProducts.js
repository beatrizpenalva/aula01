import { useState } from 'react'
import api from '../api'

const useSearchProducts = () => {
    const [productsList, setProductsList] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const isEmpty = !productsList.length

    const getProductsAvailable = async product => {
        setIsLoading(true)
        try {
            const data = await api.getProducts({ product })
            setProductsList(data)
        } catch (error) {
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        getProductsAvailable,
        isEmpty: isEmpty && !isError && !isLoading,
        isError,
        isLoading,
        productsList,
        renderContent: !isError && !isEmpty,
    }
}

export default useSearchProducts