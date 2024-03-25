import PropTypes from 'prop-types'
import './Skeleton.styles.css'

const Skeleton = ({ height, styles, width }) => (
    <div className='skeleton' style={{ height, width, ...styles }} />
)

Skeleton.propTypes = {
    height: PropTypes.string,
    styles: PropTypes.object,
    width: PropTypes.string,
}

Skeleton.defaultProps = {
    height: '100%',
    styles: {},
    width: '100%',
}



export default Skeleton