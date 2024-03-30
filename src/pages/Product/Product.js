import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ErrorState from '../../molecules/ErrorState'
import PageWrapper from '../../templates/PageWrapper'
import ProductDetails from '../../organisms/ProductDetails'
import useProductDetails from '../../hooks/useProductDetails'

const ERROR_DESCRIPTION = 'Não conseguimos exibir informações sobre o produto. Por favor, tente novamente.'

const Product = () => {
    const { productId } = useParams()
    const { details, getProductDetails, isError, isLoading } = useProductDetails({ productId })

    useEffect(() => {
        getProductDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageWrapper>
            {isError ?
                <ErrorState description={ERROR_DESCRIPTION} onTryAgain={getProductDetails} />
                :
                <ProductDetails details={details} isLoading={isLoading} />
            }
        </PageWrapper>
    )
}

export default Product
