import PropTypes from 'prop-types'
import { useState } from 'react'
// import ListItem from '../../atoms/ListItem'
import ProductAttributesList from '../ProductAttributesList'
import ProductAttributesPickers from '../ProductAttributesPickers'
import ProductImagesContainer from '../ProductImagesContainer'
// import Skeleton from '../../atoms/Skeleton'
import './ProductDetails.styles.css'

// const FeaturesLoadingState = () => (
//     <section className='features-container'>
//         <Skeleton height='32px' />
//         <ul className='features-container-skeleton'>
//             <Skeleton height='16px' />
//             <Skeleton height='16px' />
//             <Skeleton height='16px' />
//             <Skeleton height='16px' />
//             <Skeleton height='16px' />
//             <Skeleton height='16px' />
//             <Skeleton height='16px' />
//             <Skeleton height='16px' />
//         </ul>
//     </section>
// )

// to get short_description it is needed to make a request

const ProductDetails = ({ details, isLoading }) => {
    const [checkedPickers, setCheckedPickers] = useState([])

    const {
        attributes,
        condition,
        installments,
        original_price,
        sale_price,
        seller,
        shipping,
        title,
        value,
        pickers,
        pictures,
    } = details

    console.log({ condition, installments, original_price, sale_price, seller, shipping, value })

    const handleChangePicker = ({ category, value }) => {
        const pickersNotChanged = checkedPickers.filter((item) => item.category !== category)
        const newPickersSelected = [...pickersNotChanged, { category, value }]
        setCheckedPickers(newPickersSelected)
    }

    return (
        <main className='product-content-container'>
            <section className='product-info-container'>
                <ProductImagesContainer
                    isLoading={isLoading}
                    pictures={pictures}
                    aria-hidden
                />
                {pickers.length && (
                    <ProductAttributesPickers
                        checkedPickers={checkedPickers}
                        isLoading={isLoading}
                        onChange={handleChangePicker}
                        pickers={pickers}
                        productName={title}
                    />
                )}
                {/* {isLoading ? <FeaturesLoadingState /> : (
                    <section className='features-container'>
                        <h4 className='subsection-title'>O que você precisa saber sobre este produto:</h4>
                        <ul>
                            {main_features.map(({ text, type }) => (
                                <ListItem key={type} showMarker>{text}</ListItem>
                            ))}
                        </ul>
                    </section>
                )} */}
            </section>
            {/* <hr aria-hidden />
            <section className='description-container'>
                {isLoading ? <Skeleton height='24px' /> : (<h5>Descrição:</h5>)}
                {isLoading ? <Skeleton height='240px' /> : (<p>{short_description?.content}</p>)}
            </section> */}
            <hr aria-hidden />
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
        pickers: PropTypes.arrayOf(PropTypes.shape({
            picker_id: PropTypes.string.isRequired,
            picker_name: PropTypes.string.isRequired,
            products: PropTypes.arrayOf(PropTypes.shape({
                picker_label: PropTypes.string.isRequired,
                product_id: PropTypes.string.isRequired,
            })).isRequired,
        })),
        pictures: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            url: PropTypes.string,
        })),
        short_description: PropTypes.shape({
            content: PropTypes.string,
        }),
        title: PropTypes.string,
    }).isRequired,
    isLoading: PropTypes.bool,
}

ProductDetails.defaultProps = {
    isLoading: false,
}

export default ProductDetails