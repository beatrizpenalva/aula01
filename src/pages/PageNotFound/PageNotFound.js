import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button'
import FeedbackWrapper from '../../templates/FeedbackWrapper'
import { ROUTES } from '../../utils/constants'

const { HOME } = ROUTES

const PageNotFound = () => {
    const navigate = useNavigate()

    return (
        <FeedbackWrapper>
            <h1>Ops, página nao econtrada</h1>
            <p>Para ser redirecionado à página inicial, só clicar no botão abaixo.</p>
            <Button onClick={() => navigate(HOME)}>Ir para o início</Button>
        </FeedbackWrapper>
    )
}

export default PageNotFound