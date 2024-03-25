import PropTypes from 'prop-types'
import './ListItem.styles.css'

const ListItem = ({ children }) => (
    <li>
        <span className='marker' />
        {children}
    </li>
)

ListItem.propTypes = {
    children: PropTypes.oneOf([PropTypes.element, PropTypes.string]).isRequired,
}

export default ListItem