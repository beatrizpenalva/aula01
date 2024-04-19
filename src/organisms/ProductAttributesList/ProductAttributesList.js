import PropTypes from 'prop-types'
import InfoRow from '../../atoms/InfoRow'
import Skeleton from '../../atoms/Skeleton'
import Typography from '../../atoms/Typography'
import useTranslation from '../../hooks/useTranslation'
import './ProductAttributesList.styles.css'

const LoadingState = () => (
    <div className='attributes-skeleton-container'>
        {[1, 2, 3, 4, 5, 6].map((item) => {
            return <Skeleton key={item} height='32px' />
        })}
    </div>
)

const ProductAttributesList = ({ attributes, isLoading }) => {
    const { translate } = useTranslation()

    return (
        <section className='attributes-container'>
            {isLoading ? <LoadingState />
                : (
                    <>
                        <Typography component='h6' className='subsection-title' variant='subtitle-medium '>
                            {translate('productDatasheet')}
                        </Typography>
                        {attributes.map(({ id, name, value_name }, index) => {
                            const isEven = index % 2 === 0

                            return (
                                <InfoRow
                                    key={id}
                                    label={name}
                                    value={value_name}
                                    colored={isEven}
                                />
                            )
                        })}
                    </>
                )}
        </section>
    )
}

ProductAttributesList.propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value_name: PropTypes.string.isRequired,
    })),
    isLoading: PropTypes.bool,
}

ProductAttributesList.defaultProps = {
    attributes: [],
    isLoading: false,
}

export default ProductAttributesList