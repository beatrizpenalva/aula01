import PropTypes from 'prop-types'
import './RadioGroup.styles.css'

const RadioGroup = ({ children, label }) => (
    <form>
        <fieldset className="radio-group-container">
            {Boolean(label) && (<legend>{label}</legend>)}
            {children}
        </fieldset>
    </form>
)


RadioGroup.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
}

RadioGroup.defaultProps = {
    label: '',
}

export default RadioGroup