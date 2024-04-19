import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ErrorState from '../../molecules/ErrorState'
import PageWrapper from '../../templates/PageWrapper'
import ProductDetails from '../../organisms/ProductDetails'
import useProductDetails from '../../hooks/useProductDetails'
import useTranslation from '../../hooks/useTranslation'

const Product = () => {
    const { productId } = useParams()
    const { translate } = useTranslation()
    const { details, getProductDetails, isError, isLoading } = useProductDetails({ productId })

    useEffect(() => {
        getProductDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageWrapper>
            {isError ?
                <ErrorState description={translate('productDetailsError')} onTryAgain={getProductDetails} />
                :
                <ProductDetails details={details} isLoading={isLoading} />
            }
        </PageWrapper>
    )
}

export default Product
