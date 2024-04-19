import { useNavigate } from 'react-router-dom'
import CardProduct from '../../molecules/CardProduct'
import Typography from '../../atoms/Typography'
import useTranslation from '../../hooks/useTranslation'
import { getProductDetailsUrl } from '../../utils/helpers'
import './HomeSearchResultList.styles.css'

const HomeSearchResultList = ({ product, productsList }) => {
    const navigate = useNavigate()
    const { translate } = useTranslation()

    const handleViewProductDetails = ({ productId }) => {
        const url = getProductDetailsUrl(productId)
        navigate(url)
    }

    return (
        <main className="list-products-container">
            <Typography component='h2' variant='subtitle-regular' className='subsection-title'>
                {translate('searchResultProduct', { product })}
            </Typography>
            {productsList.map((item, index) => (
                <CardProduct
                    key={`${index}-${item.id}`}
                    onClick={() => handleViewProductDetails({ productId: item.id })}
                    product={item}
                />
            ))}
        </main>
    )
}


export default HomeSearchResultList