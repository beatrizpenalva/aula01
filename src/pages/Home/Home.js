import FeedbackWrapper from '../../templates/FeedbackWrapper'
import PageWrapper from '../../templates/PageWrapper'
import Typography from '../../atoms/Typography'
import useTranslation from '../../hooks/useTranslation'

const Home = () => {
    const { translate } = useTranslation()

    return (
        <PageWrapper >
            <FeedbackWrapper>
                <Typography component='h2' variant='subtitle-bold'>
                    {translate('nothingToShow')}
                </Typography>
                <Typography>
                    {translate('searchDidNotStartedDescription')}
                </Typography>
            </FeedbackWrapper>
        </PageWrapper>
    )
}

export default Home