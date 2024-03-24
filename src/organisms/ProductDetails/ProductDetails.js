import { useState } from 'react'
import ProductAttributesList from '../ProductAttributesList'
import ProductAttributesPickers from '../ProductAttributesPickers'
import ProductImagesContainer from '../ProductImagesContainer'
import './ProductDetails.styles.css'

const ProductDetails = ({ details }) => {
    const [checkedPickers, setCheckedPickers] = useState([])

    const { attributes, main_features, name, pickers, pictures, short_description } = details

    const handleChangePicker = ({ category, value }) => {
        const pickersNotChanged = checkedPickers.filter((item) => item.category !== category)
        const newPickersSelected = [...pickersNotChanged, { category, value }]
        setCheckedPickers(newPickersSelected)
    }

    return (
        <main className='product-content-container'>
            <section className='product-info-container'>
                <ProductImagesContainer pictures={pictures} />
                <ProductAttributesPickers checkedPickers={checkedPickers} onChange={handleChangePicker} pickers={pickers} productName={name} />
                <section className='features-container'>
                    <h4 className='subsection-title'>O que você precisa saber sobre este produto:</h4>
                    {main_features.map(({ text, type }) => (<p key={type}>{text}</p>))}
                </section>
            </section>
            <hr aria-hidden />
            <section className='description-container'>
                <h5>Descrição:</h5>
                <p>{short_description.content}</p>
            </section>
            <hr aria-hidden />
            <ProductAttributesList attributes={attributes} />
        </main>
    )
}

export default ProductDetails