import FeedbackWrapper from '../../templates/FeedbackWrapper'
import PageWrapper from '../../templates/PageWrapper'
import Typography from '../../atoms/Typography'

const Home = () => (
    <PageWrapper >
        <FeedbackWrapper>
            <Typography component='h2' variant='subtitle-bold'>
                Nada a ser exibido
            </Typography>
            <Typography>
                Você ainda não procurou por nada, nos diga o que procura, por favor.
            </Typography>
        </FeedbackWrapper>
    </PageWrapper>
)

export default Home