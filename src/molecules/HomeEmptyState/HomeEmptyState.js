import PropTypes from 'prop-types'
import FeedbackWrapper from '../../templates/FeedbackWrapper'
import Typography from '../../atoms/Typography/Typography'
import useTranslation from '../../hooks/useTranslation'

const HomeEmptyState = ({ product }) => {
    const { translate } = useTranslation()

    return (
        <FeedbackWrapper>
            <Typography component='h2' variant='subtitle-bold'>
                {translate('searchEmptyStateTitle')}
            </Typography>
            <Typography>
                {translate('searchEmptyStateDescription', { product })}
            </Typography>
        </FeedbackWrapper >
    )
}

HomeEmptyState.propTypes = {
    product: PropTypes.string.isRequired,
}


export default HomeEmptyState