import PropTypes from 'prop-types'
import Button from '../../atoms/Button'
import FeedbackWrapper from '../../templates/FeedbackWrapper'
import Typography from '../../atoms/Typography'
import './ErrorState.styles.css'

const ErrorState = ({ description, onTryAgain }) => (
    <FeedbackWrapper>
        <Typography component='h2' variant='subtitle-bold'>
            Ocorreu um erro
        </Typography>
        <Typography className='error-text'>
            {description}
        </Typography>
        <Button onClick={onTryAgain} variant="warning">Tentar novamente</Button>
    </FeedbackWrapper>
)

ErrorState.propTypes = {
    description: PropTypes.string.isRequired,
    onTryAgain: PropTypes.func.isRequired,
}

export default ErrorState