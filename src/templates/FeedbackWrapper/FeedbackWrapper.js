import PropTypes from 'prop-types'
import './FeedbackWrapper.styles.css'

const FeedbackWrapper = ({ children }) => (
    <main className="feedback-container">
        {children}
    </main>
)

FeedbackWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FeedbackWrapper