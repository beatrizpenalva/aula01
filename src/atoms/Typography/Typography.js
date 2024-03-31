import PropTypes from 'prop-types'
import './Typography.styles.css'

const Typography = ({ children, className, component, variant }) => (
    <p role={component} className={`${variant} text-default-style ${className}`}>{children}</p>
)

Typography.propTypes = {
    children: PropTypes.oneOf([PropTypes.string, PropTypes.element]).isRequired,
    className: PropTypes.string,
    component: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span'
    ]),
    variant: PropTypes.oneOf([
        'paragraph-xsmall-regular',
        'paragraph-sm-regular',
        'paragraph-sm-regular-erased',
        'paragraph-sm-medium',
        'paragraph-lg-regular',
        'subtitle-regular',
        'subtitle-medium',
        'subtitle-bold',
        'title-bold',
    ]),
}

Typography.defaultProps = {
    className: '',
    component: 'p',
    variant: 'paragraph-lg-regular',
}

export default Typography