import PropTypes from 'prop-types'
import './InfoRow.styles.css'

const InfoRow = ({ colored, label, value }) => (
    <>
        {!Boolean(value) ? null : (<>
            <div className={`row${colored ? ' colored' : ''}`}>
                <p>{label}</p>
                <p>{value}</p>
            </div>
            <hr aria-hidden />

        </>)}
    </>
)

InfoRow.propTypes = {
    colored: PropTypes.bool,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

InfoRow.defaultProps = {
    colored: false
}

export default InfoRow