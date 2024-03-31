import FeedbackWrapper from '../../templates/FeedbackWrapper'
import Typography from '../../atoms/Typography'

const HomeInitialState = () => (
    <FeedbackWrapper>
        <Typography component='h2' variant='subtitle-medium'>
            Nada a ser exibido
        </Typography>
        <Typography>
            Você ainda não procurou por nada, nos diga o que procura, por favor.
        </Typography>
    </FeedbackWrapper>
)

export default HomeInitialState