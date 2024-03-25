import PropTypes from 'prop-types'
import IconNoPictures from '../../assets/IconNoPictures.png'
import './NoPicturesPlaceholder.styles.css'

const NoPicturesPlaceholder = ({ border, size }) => (
    <div className={`no-pictures-container ${border ? 'no-pictures-container-with-border' : ''}`} style={{ height: size, width: size }} data-testid='default-img-container'>
        <img src={IconNoPictures} aria-hidden className='no-pictures-icon' />
    </div>
)

NoPicturesPlaceholder.propTypes = {
    border: PropTypes.bool,
    size: PropTypes.string,
}

NoPicturesPlaceholder.defaultProps = {
    border: false,
    size: '',
}

export default NoPicturesPlaceholder