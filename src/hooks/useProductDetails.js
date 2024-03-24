import { useState } from 'react'
import service from '../service'

const useProductDetails = ({ productId }) => {
    const [details, setDetails] = useState({})
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const getProductDetails = async () => {
        setIsLoading(true)
        try {
            const result = await service.getProductDetails({ productId })
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
        isError,
        isLoading,
    }
}

export default useProductDetails