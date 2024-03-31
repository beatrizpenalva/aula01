import PropTypes from 'prop-types'
import ProductAttributesList from '../ProductAttributesList'
import ProductDescription from '../../molecules/ProductDescription'
import ProductImagesContainer from '../ProductImagesContainer'
import './ProductDetails.styles.css'

const ProductDetails = ({ details, isLoading }) => {
    const {
        attributes,
        condition,
        original_price,
        pictures,
        price,
        shipping,
        title,
        sale_terms,
        buying_mode,
    } = details

    return (
        <main className='product-content-container'>
            <section className='product-info-container'>
                <ProductImagesContainer
                    isLoading={isLoading}
                    pictures={pictures}
                    aria-hidden
                />
                <ProductDescription
                    isAvailable={buying_mode === 'buy_it_now'}
                    isFreeShipping={shipping?.free_shipping}
                    isLoading={isLoading}
                    isNew={condition === 'new'}
                    salePrice={price}
                    saleTerms={sale_terms}
                    title={title}
                    value={original_price}
                />
            </section>
            <hr className='divider' aria-hidden />
            <ProductAttributesList
                attributes={attributes}
                isLoading={isLoading}
            />
        </main>
    )
}

ProductDetails.propTypes = {
    details: PropTypes.shape({
        attributes: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            value_name: PropTypes.string.isRequired,
        })),
        buying_mode: PropTypes.string,
        condition: PropTypes.string,
        original_price: PropTypes.number.isRequired,
        pictures: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            url: PropTypes.string,
        })),
        price: PropTypes.number,
        sale_terms: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            value_name: PropTypes.string,
        })),
        shipping: PropTypes.shape({
            free_shipping: PropTypes.bool,
        }),
        title: PropTypes.string,
    }).isRequired,
    isLoading: PropTypes.bool,
}

ProductDetails.defaultProps = {
    isLoading: false,
}

export default ProductDetails