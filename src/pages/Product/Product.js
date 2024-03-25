import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ErrorState from '../../molecules/ErrorState'
import Header from '../../molecules/Header'
import ProductDetails from '../../organisms/ProductDetails'
import useProductDetails from '../../hooks/useProductDetails'
import { ROUTES } from '../../utils/constants'

const { HOME } = ROUTES

const ERROR_DESCRIPTION = 'Não conseguimos exibir informações sobre o produto. Por favor, tente novamente.'

const Product = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { state: { productId } } = location
    const { details, getProductDetails, isError, isLoading } = useProductDetails({ productId })

    const handleSearch = value => {
        navigate(HOME, { state: { search: value } })
    }

    useEffect(() => {
        getProductDetails()
    }, [productId])

    return (
        <>
            <Header onSearch={value => handleSearch(value)} />
            {isError ?
                <ErrorState description={ERROR_DESCRIPTION} onTryAgain={getProductDetails} />
                :
                <ProductDetails details={details} isLoading={isLoading} />
            }
        </>
    )
}

export default Product
