import { useState } from 'react'
import RadioGroup from '../../atoms/RadioGroup'
import RadioImage from '../../atoms/RadioImage'
import './ProductImagesContainer.styles.css'

const ProductImagesContainer = ({ pictures }) => {
    const [mainPicture, setMainPicture] = useState(pictures[0].url)

    return (
        <section className='product-images-section' aria-hidden>
            <RadioGroup variant='vertical'>
                {pictures.map(({ id, url }) => (
                    <RadioImage
                        checked={url === mainPicture}
                        id={id}
                        group='product-details-image'
                        onChange={() => setMainPicture(url)}
                        url={url}
                        value={id}
                    />
                ))}
            </RadioGroup>
            <img src={mainPicture} className='product-image' />
        </section>
    )
}

export default ProductImagesContainer