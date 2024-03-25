import { useNavigate } from 'react-router-dom'
import CardProduct from '../../molecules/CardProduct'
import './HomeSearchResultList.styles.css'
import { getProductDetailsUrl } from '../../utils/helpers'

const HomeSearchResultList = ({ product, productsList }) => {
    const navigate = useNavigate()

    const handleViewProductDetails = ({ productId }) => {
        const url = getProductDetailsUrl(productId)
        navigate(url)
    }

    return (
        <main className="list-products-container">
            <h2 className='subsection-title'>Resultado da busca para: {product}</h2>
            {productsList.map((item, index) => (
                <CardProduct key={`${index}-${item.id}`} onClick={() => handleViewProductDetails({ productId: item.id })} product={item} />
            ))}
        </main>
    )
}


export default HomeSearchResultList