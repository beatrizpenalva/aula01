import FeedbackWrapper from '../../templates/FeedbackWrapper'
import Typography from '../../atoms/Typography'
import useTranslation from '../../hooks/useTranslation'

const HomeInitialState = () => {
    const { translate } = useTranslation()

    return (
        <FeedbackWrapper>
            <Typography component='h2' variant='subtitle-bold'>
                {translate('nothingToShow')}
            </Typography>
            <Typography>
                {translate('searchDidNotStartedDescription')}
            </Typography>
        </FeedbackWrapper>
    )
}

export default HomeInitialState