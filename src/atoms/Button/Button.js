import PropTypes from 'prop-types'
import './Button.styles.css'

const style = {
    primary: 'primary-button',
    secondary: 'secondary-button',
    warning: 'warning-button',
}

const Button = ({ ariaLabel, children, onClick, type, variant }) => (
    <button aria-label={ariaLabel} className={style[variant]} onClick={onClick} type={type}>{children}</button>
)

Button.propTypes = {
    ariaLabel: PropTypes.string,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['button', 'submit']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'warning'])
}

Button.defaultProps = {
    ariaLabel: '',
    type: 'button',
    variant: 'primary',
}

export default Button