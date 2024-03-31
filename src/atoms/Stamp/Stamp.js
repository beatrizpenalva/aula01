import PropTypes from 'prop-types'
import './Stamp.styles.css'

const Stamp = ({ text }) => (
    <div className='stamp-container'>
        <p className='stamp-text'>{text}</p>
    </div>
)

Stamp.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Stamp