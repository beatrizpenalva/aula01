import PropTypes from 'prop-types'
import Button from '../../atoms/Button'
import FeedbackWrapper from '../../templates/FeedbackWrapper'
import Typography from '../../atoms/Typography'
import useTranslation from '../../hooks/useTranslation'
import './ErrorState.styles.css'

const ErrorState = ({ description, onTryAgain }) => {
    const { translate } = useTranslation()

    return (
        <FeedbackWrapper>
            <Typography component='h2' variant='subtitle-bold'>
                {translate('errorStateTitle')}
            </Typography>
            <Typography className='error-text'>
                {description}
            </Typography>
            <Button onClick={onTryAgain} variant="warning">{translate('buttonTryAgain')}</Button>
        </FeedbackWrapper>
    )
}

ErrorState.propTypes = {
    description: PropTypes.string.isRequired,
    onTryAgain: PropTypes.func.isRequired,
}

export default ErrorState