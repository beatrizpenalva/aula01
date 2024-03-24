import PropTypes from 'prop-types'
import Button from '../../atoms/Button'
import FeedbackWrapper from '../../templates/FeedbackWrapper'
import './ErrorState.styles.css'

const ErrorState = ({ onTryAgain }) => (
    <FeedbackWrapper>
        <h2>Ocorreu um erro</h2>
        <p className='home-error-text'>Não conseguimos efetuar a busca. Por favor, tente novamente.</p>
        <Button onClick={onTryAgain} variant="warning">Tentar novamente</Button>
    </FeedbackWrapper>
)

ErrorState.propTypes = {
    onTryAgain: PropTypes.func.isRequired,
}

export default ErrorState