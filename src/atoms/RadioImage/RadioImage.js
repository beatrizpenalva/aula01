import PropTypes from 'prop-types'
import './RadioImage.styles.css'

const RadioImage = ({ alt, checked, group, id, onChange, url, value }) => {

    return (
        <label htmlFor={id}>
            <img src={url} className={`radio-image${checked ? ' radio-image-checked' : ''}`} alt={alt} />
            <input type='radio' id={id} name={group} value={value} onChange={onChange} />
        </label>
    )
}

RadioImage.propTypes = {
    alt: PropTypes.string,
    checked: PropTypes.bool,
    group: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

RadioImage.defaultProps = {
    alt: '',
    checked: false,
}

export default RadioImage