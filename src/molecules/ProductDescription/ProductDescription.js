import PropTypes from 'prop-types'
import ListItem from '../../atoms/ListItem'
import Skeleton from '../../atoms/Skeleton'
import Stamp from '../../atoms/Stamp'
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

// TODO: Adjust style if has not sale price
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
                    <h3>{title}</h3>
                    <div className='price-conditions-container'>
                        {isFreeShipping && <p>Frete grátis</p>}
                        <p>{formatCurrency(value)}</p>
                        <h4>{formatCurrency(salePrice)}</h4>
                    </div>
                </div>
                {saleTerms.length && (
                    <>
                        <h5 className='subsection-title'>O que você precisa saber sobre este produto:</h5>
                        <ul>
                            {saleTerms.map(({ id, name, value_name }) => (
                                <div className='sale-term-container'>
                                    <ListItem key={name} showMarker>{name}</ListItem>
                                    <p key={id} className='sale-term-info'>{value_name}</p>
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