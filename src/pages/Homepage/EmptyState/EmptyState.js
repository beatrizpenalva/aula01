import PropTypes from 'prop-types'
import FeedbackWrapper from '../../templates/FeedbackWrapper'

const EmptyState = ({ product }) => (
    <FeedbackWrapper>
        <h2>Item não encontrado</h2>
        <p>Não encontramos nenhum item correspondente a sua busca por <b>{product}</b>.</p>
    </FeedbackWrapper>
)

EmptyState.propTypes = {
    product: PropTypes.string.isRequired,
}


export default EmptyState