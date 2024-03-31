import PropTypes from 'prop-types'
import Typography from '../Typography'
import './InfoRow.styles.css'

const InfoRow = ({ colored, label, value }) => (
    <>
        {!Boolean(value) ? null : (
            <>
                <div className={`row${colored ? ' colored' : ''}`} data-testid='info-row'>
                    <Typography variant='paragraph-sm-medium'>
                        {label}
                    </Typography>
                    <Typography variant='paragraph-sm-regular'>
                        {value}
                    </Typography>
                </div>
            </>
        )}
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