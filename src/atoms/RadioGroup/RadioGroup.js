import PropTypes from 'prop-types'
import './RadioGroup.styles.css'

const RadioGroup = ({ children, label, variant }) => (
    <form>
        <fieldset className={`radio-group-container radio-group-${variant}`}>
            {Boolean(label) && (<legend>{label}</legend>)}
            {children}
        </fieldset>
    </form >
)


RadioGroup.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
    variant: PropTypes.oneOf(['horizontal', 'vertical'])
}

RadioGroup.defaultProps = {
    label: '',
    variant: 'horizontal',
}

export default RadioGroup