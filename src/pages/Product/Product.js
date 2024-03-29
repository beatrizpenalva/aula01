import { useLocation } from 'react-router-dom'
import PageWrapper from '../../templates/PageWrapper'
import ProductDetails from '../../organisms/ProductDetails'

const Product = () => {
    const location = useLocation()
    const { state: { item } } = location

    return (
        <PageWrapper>
            <ProductDetails details={item} />
        </PageWrapper>
    )
}

export default Product
