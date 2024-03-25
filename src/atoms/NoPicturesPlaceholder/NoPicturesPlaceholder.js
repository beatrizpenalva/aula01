import PropTypes from 'prop-types'
import IconNoPictures from '../../assets/IconNoPictures.png'
import './NoPicturesPlaceholder.styles.css'

const NoPicturesPlaceholder = ({ border, height, width }) => (
    <div className={`no-pictures-container ${border ? 'no-pictures-container-with-border' : ''}`} style={{ height, width }}>
        <img src={IconNoPictures} aria-hidden className='no-pictures-icon' />
    </div>
)

NoPicturesPlaceholder.propTypes = {
    border: PropTypes.bool,
    height: PropTypes.string,
    width: PropTypes.string,
}

NoPicturesPlaceholder.defaultProps = {
    border: false,
    height: '',
    width: '',
}

export default NoPicturesPlaceholder