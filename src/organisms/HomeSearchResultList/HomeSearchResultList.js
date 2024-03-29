import { useNavigate } from 'react-router-dom'
import CardProduct from '../../molecules/CardProduct'
import { getProductDetailsUrl } from '../../utils/helpers'
import './HomeSearchResultList.styles.css'

const HomeSearchResultList = ({ product, productsList }) => {
    const navigate = useNavigate()

    const handleViewProductDetails = ({ item, productId }) => {
        navigate({
            pathname: getProductDetailsUrl(productId),
            state: item,
        })
    }

    return (
        <main className="list-products-container">
            <h2 className='subsection-title'>Resultado da busca para: {product}</h2>
            {productsList.map((item, index) => (
                <CardProduct
                    key={`${index}-${item.id}`}
                    onClick={() => handleViewProductDetails({ item, productId: item.id })}
                    product={item}
                />
            ))}
        </main>
    )
}


export default HomeSearchResultList