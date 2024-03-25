import PropTypes from 'prop-types'
import './Skeleton.styles.css'

const Skeleton = ({ height, width }) => (
    <div className='skeleton' style={{ height, width }} />
)

Skeleton.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
}

Skeleton.defaultProps = {
    height: '100%',
    width: '100%',
}



export default Skeleton