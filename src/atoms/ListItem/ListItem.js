import PropTypes from 'prop-types'
import './ListItem.styles.css'

const ListItem = ({ children, showMarker }) => (
    <li>
        {showMarker && <span className='marker' />}
        {children}
    </li>
)

ListItem.propTypes = {
    children: PropTypes.oneOf([PropTypes.element, PropTypes.string]).isRequired,
    showMarker: PropTypes.bool,
}

ListItem.defaultProps = {
    showMarker: false,
}

export default ListItem