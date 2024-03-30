import PropTypes from 'prop-types'
import './Radio.styles.css'

const Radio = ({ checked, group, id, label, onChange, value }) => (
    <div
        className={`radio-input-container${checked ? ' radio-checked' : ''}`}
        data-testid='radio-container'
    >
        <input
            type='radio'
            id={id}
            name={group}
            value={value}
            onChange={onChange}
        />
        <label htmlFor={id}>{label}</label>
    </div>
)

Radio.propTypes = {
    checked: PropTypes.bool,
    group: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

Radio.defaultProps = {
    checked: false,
}

export default Radio