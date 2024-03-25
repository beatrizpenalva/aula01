import PropTypes from 'prop-types'
import InfoRow from '../../atoms/InfoRow'
import Skeleton from '../../atoms/Skeleton'
import './ProductAttributesList.styles.css'

const LoadingState = () => (
    <div className='attributes-skeleton-container'>
        {[1, 2, 3, 4, 5, 6].map((item) => {
            return <Skeleton key={item} height='32px' />
        })}
    </div>
)

const ProductAttributesList = ({ attributes, isLoading }) => (
    <section className='attributes-container'>
        {isLoading ?
            (<LoadingState />)
            :
            (
                <>
                    {attributes.map(({ id, name, value_name }, index) => {
                        const isEven = index % 2 === 0

                        return (
                            <InfoRow key={id} label={name} value={value_name} colored={isEven} />
                        )
                    })}
                </>
            )}
    </section>
)

ProductAttributesList.propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value_name: PropTypes.string.isRequired,
    })).isRequired,
    isLoading: PropTypes.bool,
}

ProductAttributesList.defaultProps = {
    isLoading: false,
}

export default ProductAttributesList