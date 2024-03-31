import PropTypes from 'prop-types'
import ListItem from '../../atoms/ListItem'
import Skeleton from '../../atoms/Skeleton'
import Stamp from '../../atoms/Stamp'
import Typography from '../../atoms/Typography'
import './ProductDescription.styles.css'
import { formatCurrency } from '../../utils/helpers'

const LoadingState = () => (
    <section className='description-container'>
        <Skeleton height='20px' />
        <ul className='description-container-skeleton'>
            <Skeleton height='16px' />
            <Skeleton height='16px' />
            <Skeleton height='16px' />
            <Skeleton height='16px' />
            <Skeleton height='16px' />
            <Skeleton height='16px' />
            <Skeleton height='16px' />
            <Skeleton height='16px' />
        </ul>
    </section>
)

const ProductDescription = ({
    isAvailable,
    isFreeShipping,
    isLoading,
    isNew,
    salePrice,
    saleTerms,
    title,
    value
}) => (
    <>
        {isLoading ? <LoadingState /> : (
            <section className='description-container'>
                <div>
                    <div className='conditions-container'>
                        {isNew && <Stamp text='Novo' />}
                        {isAvailable && <Stamp text='Compre agora' />}
                    </div>
                    <Typography component='h3' variant='subtitle-medium'>{title}</Typography>
                    <div className='price-conditions-container'>
                        {isFreeShipping && (
                            <Typography className='shipping-text' variant='paragraph-large-medium'>
                                Frete grátis
                            </Typography>
                        )}
                        <Typography variant='paragraph-sm-regular-erased'>
                            {formatCurrency(value)}
                        </Typography>
                        <Typography component='h4' variant='subtitle-medium'>
                            {formatCurrency(salePrice)}
                        </Typography>
                    </div>
                </div>
                {Boolean(saleTerms.length) && (
                    <>
                        <hr aria-hidden className='divider' />
                        <Typography
                            component='h5'
                            className='subsection-title'
                            variant='paragraph-large-medium'
                        >
                            O que você precisa saber sobre este produto:
                        </Typography>
                        <ul>
                            {saleTerms.map(({ id, name, value_name }) => (
                                <div className='sale-term-container' key={id}>
                                    <ListItem showMarker>
                                        <Typography component='span' variant='paragraph-xsmall-regular'>
                                            {name}
                                        </Typography>
                                    </ListItem>
                                    <Typography className='sale-term-info' variant='paragraph-sm-regular'>
                                        {value_name}
                                    </Typography>
                                </div>
                            ))}
                        </ul>
                    </>
                )}
            </section>
        )}
    </>
)

ProductDescription.propTypes = {
    isAvailable: PropTypes.bool,
    isFreeShipping: PropTypes.bool,
    isLoading: PropTypes.bool,
    isNew: PropTypes.bool,
    salePrice: PropTypes.string,
    saleTerms: PropTypes.array,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

ProductDescription.defaultProps = {
    isAvailable: false,
    isFreeShipping: false,
    isLoading: false,
    isNew: false,
    salePrice: '',
    saleTerms: [],
}

export default ProductDescription