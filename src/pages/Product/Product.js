import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ErrorState from '../../molecules/ErrorState'
import PageWrapper from '../../templates/PageWrapper'
import ProductDetails from '../../organisms/ProductDetails'
import useProductDetails from '../../hooks/useProductDetails'

const ERROR_DESCRIPTION = 'Não conseguimos exibir informações sobre o produto. Por favor, tente novamente.'

const Product = () => {
    const location = useLocation()
    const { state: { item } } = location

    const { details, getProductDetails, isError, isLoading } = useProductDetails({ productId: item.catalog_product_id })

    console.log(details)

    useEffect(() => {
        getProductDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageWrapper>
            {isError ?
                <ErrorState description={ERROR_DESCRIPTION} onTryAgain={getProductDetails} />
                :
                <ProductDetails details={item} isLoading={isLoading} />
            }
        </PageWrapper>
    )
}

export default Product
