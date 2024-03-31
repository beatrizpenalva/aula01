import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button'
import FeedbackWrapper from '../../templates/FeedbackWrapper'
import Typography from '../../atoms/Typography'
import { ROUTES } from '../../utils/constants'

const { HOME } = ROUTES

const PageNotFound = () => {
    const navigate = useNavigate()

    return (
        <FeedbackWrapper>
            <Typography component='h1' variant='title-bold'>
                Ops, página não econtrada
            </Typography>
            <Typography>
                Para ser redirecionado à página inicial, só clicar no botão abaixo.
            </Typography>
            <Button onClick={() => navigate(HOME)}>Ir para o início</Button>
        </FeedbackWrapper>
    )
}

export default PageNotFound