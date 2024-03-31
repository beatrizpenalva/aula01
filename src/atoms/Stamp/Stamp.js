import PropTypes from 'prop-types'
import Typography from '../Typography'
import './Stamp.styles.css'

const Stamp = ({ text }) => (
    <div className='stamp-container'>
        <Typography variant='paragraph-large-medium' className='stamp-text'>
            {text}
        </Typography>
    </div>
)

Stamp.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Stamp