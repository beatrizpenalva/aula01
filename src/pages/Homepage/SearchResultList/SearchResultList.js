import { useNavigate } from 'react-router-dom'
import CardProduct from '../../../molecules/CardProduct'
import './SearchResultList.styles.css'
import { ROUTES } from '../../../utils/constants'

const { PRODUCT } = ROUTES

const SearchResultList = ({ product, productsList }) => {
    const navigate = useNavigate()

    const handleViewProductDetails = ({ productId }) => {
        navigate(PRODUCT, { state: { productId } })
    }

    return (
        <main className="list-products-container">
            <h2>Resultado da busca para: {product}</h2>
            {productsList.map((item, index) => (
                <CardProduct key={`${index}-${item.id}`} onClick={() => handleViewProductDetails({ productId: item.id })} product={item} />
            ))}
        </main>
    )
}


export default SearchResultList