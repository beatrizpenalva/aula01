import PropTypes from 'prop-types'
import FeedbackWrapper from '../../templates/FeedbackWrapper'
import Typography from '../../atoms/Typography/Typography'

const HomeEmptyState = ({ product }) => (
    <FeedbackWrapper>
        <Typography component='h2' variant='subtitle-bold'>
            Item não encontrado
        </Typography>
        <Typography>
            Não encontramos nenhum item correspondente a sua busca por <b>{product}</b>.
        </Typography>
    </FeedbackWrapper>
)

HomeEmptyState.propTypes = {
    product: PropTypes.string.isRequired,
}


export default HomeEmptyState