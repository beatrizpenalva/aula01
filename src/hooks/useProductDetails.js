import { useState } from 'react'
import api from '../api'

const token = localStorage.getItem('token')

const useProductDetails = ({ productId }) => {
    const [details, setDetails] = useState({})
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const getProductDetails = async () => {
        setIsLoading(true)
        try {
            const result = await api.getProductDetails({ productId, token })
            setDetails(result)
        } catch {
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        details,
        getProductDetails,
        isError: !isLoading && (isError || !Object.keys(details).length),
        isLoading,
    }
}

export default useProductDetails