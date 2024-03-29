import { useLocation } from 'react-router-dom'
import PageWrapper from '../../templates/PageWrapper'
import ProductDetails from '../../organisms/ProductDetails'

const Product = () => {
    const location = useLocation()
    const { state: { details } } = location

    return (
        <PageWrapper>
            <ProductDetails details={details} />
        </PageWrapper>
    )
}

export default Product
