import PropTypes from 'prop-types'
import NoPicturesPlaceholder from '../../atoms/NoPicturesPlaceholder'
import './CardProduct.styles.css'

const CardProduct = ({ onClick, product }) => {
    const { domain_id, thumbnail, title } = product ?? {}

    return (
        <button
            type='button'
            onClick={onClick}
            className="card-container"
            aria-label={`Ver detalhes de ${title}`}
        >
            {thumbnail ? (
                <div className='card-image-wrapper' data-testid='card-image'>
                    <img
                        src={thumbnail}
                        aria-hidden
                        className="card-image"
                        alt=''
                    />
                </div>
            ) : (
                <NoPicturesPlaceholder size='64px' />
            )}
            <div className="card-text-container">
                <p>{title}</p>
                <p>Por: {domain_id}</p>
            </div>
        </button>
    )
}

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