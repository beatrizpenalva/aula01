import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button'
import FeedbackWrapper from '../../templates/FeedbackWrapper'
import Typography from '../../atoms/Typography'
import { ROUTES } from '../../utils/constants'

const { HOME } = ROUTES

const ErrorBoundary = () => {
    const navigate = useNavigate()

    return (
        <FeedbackWrapper>
            <Typography component='h2' variant='title-bold'>
                Ops, ocorreu um problema!
            </Typography>
            <Typography>
                Por favor, clique no botão abaixo para ser redirecionado à página inicial.
            </Typography>
            <Button onClick={() => navigate(HOME)}>Voltar ao início</Button>
        </FeedbackWrapper >
    )
}

export default ErrorBoundary