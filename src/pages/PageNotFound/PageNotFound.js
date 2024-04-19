import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button'
import FeedbackWrapper from '../../templates/FeedbackWrapper'
import Typography from '../../atoms/Typography'
import useTranslation from '../../hooks/useTranslation'
import { ROUTES } from '../../utils/constants'

const { HOME } = ROUTES

const PageNotFound = () => {
    const navigate = useNavigate()
    const { translate } = useTranslation()

    return (
        <FeedbackWrapper>
            <Typography component='h1' variant='title-bold'>
                {translate('pageNotFound')}
            </Typography>
            <Typography>
                {translate('pageNotFoundDescription')}
            </Typography>
            <Button onClick={() => navigate(HOME)}>{translate('buttonGoToHome')}</Button>
        </FeedbackWrapper>
    )
}

export default PageNotFound