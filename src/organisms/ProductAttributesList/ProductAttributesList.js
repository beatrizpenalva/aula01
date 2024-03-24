import PropTypes from 'prop-types'
import InfoRow from '../../atoms/InfoRow'
import './ProductAttributesList.styles.css'

const ProductAttributesList = ({ attributes }) => (
    <section className='attributes-container'>
        {attributes.map(({ id, name, value_name }, index) => {
            const isEven = index % 2 === 0

            return (
                <InfoRow key={id} label={name} value={value_name} colored={isEven} />
            )
        })}
    </section>
)

ProductAttributesList.propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value_name: PropTypes.string.isRequired,
    })).isRequired,
}

export default ProductAttributesList