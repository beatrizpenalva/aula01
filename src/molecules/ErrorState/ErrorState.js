import PropTypes from 'prop-types'
import Button from '../../atoms/Button'
import FeedbackWrapper from '../../templates/FeedbackWrapper'
import './ErrorState.styles.css'

const ErrorState = ({ description, onTryAgain }) => (
    <FeedbackWrapper>
        <h2>Ocorreu um erro</h2>
        <p className='error-text'>{description}</p>
        <Button onClick={onTryAgain} variant="warning">Tentar novamente</Button>
    </FeedbackWrapper>
)

ErrorState.propTypes = {
    description: PropTypes.string.isRequired,
    onTryAgain: PropTypes.func.isRequired,
}

export default ErrorState