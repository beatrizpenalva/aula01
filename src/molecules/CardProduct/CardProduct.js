import PropTypes from 'prop-types'
import NoPicturesPlaceholder from '../../atoms/NoPicturesPlaceholder'
import Stamp from '../../atoms/Stamp'
import Typography from '../../atoms/Typography'
import useTranslation from '../../hooks/useTranslation'
import { formatCurrency } from '../../utils/helpers'
import './CardProduct.styles.css'

const CardProduct = ({ onClick, product }) => {
    const { translate } = useTranslation()

    const {
        official_store_name,
        original_price,
        price,
        shipping: { free_shipping },
        thumbnail,
        title
    } = product ?? {}

    return (
        <button
            type='button'
            onClick={onClick}
            className="card-container"
            aria-label={translate('productSeeDetailsButtonA11y', { product: title })}
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
            <div className="card-second-column">
                <Typography variant='paragraph-large-medium'>{title}</Typography>
                {Boolean(official_store_name) && (
                    <Typography variant='paragraph-xsmall-regular'>
                        {translate('by', { description: official_store_name })}
                    </Typography>
                )}
                <div className='card-price-line'>
                    <Typography variant='subtitle-medium'>
                        {formatCurrency(price)}
                    </Typography>
                    <Typography variant='paragraph-sm-regular-erased'>
                        {formatCurrency(original_price)}
                    </Typography>
                </div>
                {free_shipping && <Stamp text={translate('freeShipping')} />}
            </div>
        </button>
    )
}

CardProduct.propTypes = {
    onClick: PropTypes.func.isRequired,
    product: PropTypes.shape({
        official_store_name: PropTypes.string.isRequired,
        original_price: PropTypes.number.isRequired,
        price: PropTypes.number,
        shipping: PropTypes.shape({
            free_shipping: PropTypes.bool.isRequired
        }).isRequired,
        thumbnail: PropTypes.string,
        title: PropTypes.string.isRequired,
    }).isRequired,
}

export default CardProduct