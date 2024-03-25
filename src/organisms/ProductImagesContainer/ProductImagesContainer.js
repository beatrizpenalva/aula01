import PropTypes from 'prop-types'
import { useState } from 'react'
import RadioGroup from '../../atoms/RadioGroup'
import RadioImage from '../../atoms/RadioImage'
import Skeleton from '../../atoms/Skeleton'
import './ProductImagesContainer.styles.css'

const LoadingState = () => (
    <>
        <div className='product-images-skeleton-container'>
            <Skeleton height='80px' />
            <Skeleton height='80px' />
            <Skeleton height='80px' />
        </div>
        <Skeleton className='product-image' width='200px' styles={{ 'margin-left': '16px' }} />
    </>
)

const ProductImagesContainer = ({ isLoading, pictures }) => {
    const [mainPicture, setMainPicture] = useState(pictures[0].url)

    return (
        <section className='product-images-section' aria-hidden>
            {isLoading ? <LoadingState /> : (
                <>
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
                </>
            )}
        </section>
    )
}

ProductImagesContainer.propTypes = {
    isLoading: PropTypes.bool,
    pictures: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
    })),
}

ProductImagesContainer.defaultProps = {
    isLoading: false,
    pictures: [{
        url: '',
    }],
}

export default ProductImagesContainer