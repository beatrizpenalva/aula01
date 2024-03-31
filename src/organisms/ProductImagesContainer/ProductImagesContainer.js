import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import NoPicturesPlaceholder from '../../atoms/NoPicturesPlaceholder'
import RadioGroup from '../../atoms/RadioGroup'
import RadioImage from '../../atoms/RadioImage'
import Skeleton from '../../atoms/Skeleton'
import './ProductImagesContainer.styles.css'

const EmptyState = () => (
    <div className='produc-images-empty-state'>
        <NoPicturesPlaceholder border size='56px' />
        <NoPicturesPlaceholder size='240px' />
    </div>
)

const LoadingState = () => (
    <>
        <div className='product-images-skeleton-container'>
            <Skeleton height='80px' />
            <Skeleton height='80px' />
            <Skeleton height='80px' />
        </div>
        <Skeleton className='product-image' width='200px' styles={{ marginLeft: '16px' }} />
    </>
)

const ProductImagesContainer = ({ isLoading, pictures }) => {
    const [mainPicture, setMainPicture] = useState('')

    useEffect(() => {
        if (pictures.length) {
            setMainPicture(pictures[0].url)
        }
    }, [pictures])

    return (
        <section className='product-images-section'>
            {isLoading ? <LoadingState /> : (
                <>
                    {!pictures.length ? <EmptyState /> : (
                        <>
                            <RadioGroup variant='vertical'>
                                {pictures.map(({ id, url }) => (
                                    <RadioImage
                                        key={id}
                                        checked={url === mainPicture}
                                        id={id}
                                        group='product-details-image'
                                        onChange={() => setMainPicture(url)}
                                        url={url}
                                        value={id}
                                    />
                                ))}
                            </RadioGroup>
                            <img src={mainPicture} className='product-image' alt='' aria-hidden />
                        </>
                    )}
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
    pictures: [],
}

export default ProductImagesContainer