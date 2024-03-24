import PropTypes from 'prop-types'
import './CardProduct.styles.css'

const CardProduct = ({ onClick, product }) => (
    <div type="button" onClick={onClick} className="card-container">
        <div className='card-image-wrapper'>
            <img src={product.pictures[0].url} aria-hidden className="card-image" />
        </div>
        <div className="card-text-container">
            <p>{product.name}</p>
            <p>Por: {product.domain_id}</p>
        </div>
    </div>
)

CardProduct.propTypes = {
    onClick: PropTypes.func.isRequired,
    product: PropTypes.shape({
        domain_id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        pictures: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string,
        })).isRequired,
    }).isRequired,
}

export default CardProduct