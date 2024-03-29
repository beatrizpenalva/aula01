import { useState } from 'react'
import api from '../api'

const token = localStorage.getItem('acessToken')
const refreshToken = localStorage.getItem('refreshToken')

const useSearchProducts = () => {
    const [productsList, setProductsList] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const isEmpty = !productsList.length

    const getProductsAvailable = async (product) => {
        setIsLoading(true)
        try {
            const { results } = await api.searchProducts({ product, token })
            setProductsList(results)
        } catch (error) {
            const isInvalidGrantError = error.response.error === 'invalid_grant'

            if (!isInvalidGrantError) {
                setIsError(true)
                return
            } else {
                const { access_token, refresh_token } = await api.getNewRefreshToken({ refreshToken })
                localStorage.setItem('acessToken', access_token)
                localStorage.setItem('refreshToken', refresh_token)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return {
        getProductsAvailable,
        isEmpty: isEmpty && !isError,
        isError,
        isLoading,
        productsList,
        renderContent: !isError && !isEmpty,
    }
}

export default useSearchProducts