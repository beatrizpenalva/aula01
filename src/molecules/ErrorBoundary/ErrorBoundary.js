import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button'
import FeedbackWrapper from '../../templates/FeedbackWrapper'
import { ROUTES } from '../../utils/constants'

const { HOME } = ROUTES

const ErrorBoundary = () => {
    const navigate = useNavigate()

    return (
        <FeedbackWrapper>
            <h1>Ops, ocorreu um problema!</h1>
            <p>Por favor, clique no botão abaixo para ser redirecionado à página inicial.</p>
            <Button onClick={() => navigate(HOME)}>Voltar ao início</Button>
        </FeedbackWrapper>
    )
}

export default ErrorBoundary