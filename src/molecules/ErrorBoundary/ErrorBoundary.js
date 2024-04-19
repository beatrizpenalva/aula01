import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button'
import FeedbackWrapper from '../../templates/FeedbackWrapper'
import Typography from '../../atoms/Typography'
import useTranslation from '../../hooks/useTranslation'
import { ROUTES } from '../../utils/constants'

const { HOME } = ROUTES

const ErrorBoundary = () => {
    const navigate = useNavigate()
    const { translate } = useTranslation()

    return (
        <FeedbackWrapper>
            <Typography component='h2' variant='title-bold'>
                {translate('errorBoundaryTitle')}
            </Typography>
            <Typography>
                {translate('errorBoundaryDescriptio')}
            </Typography>
            <Button onClick={() => navigate(HOME)}>{translate('buttonGoBackToBegin')}</Button>
        </FeedbackWrapper >
    )
}

export default ErrorBoundary