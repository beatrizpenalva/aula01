import { useNavigate } from 'react-router-dom'
import CardProduct from '../../molecules/CardProduct'
import Typography from '../../atoms/Typography'
import { getProductDetailsUrl } from '../../utils/helpers'
import './HomeSearchResultList.styles.css'

const HomeSearchResultList = ({ product, productsList }) => {
    const navigate = useNavigate()

    const handleViewProductDetails = ({ productId }) => {
        const url = getProductDetailsUrl(productId)
        navigate(url)
    }

    return (
        <main className="list-products-container">
            <Typography component='h2' variant='subtitle-regular' className='subsection-title'>
                Resultado da busca para:
                <Typography component='span' variant='subtitle-medium'>{product}</Typography>
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