import PropTypes from 'prop-types'
import SearchInput from '../../atoms/SearchInput'
import Typography from '../../atoms/Typography'
import useTranslation from '../../hooks/useTranslation'
import './Header.styles.css'

const Header = ({ onSearch }) => {
    const { translate } = useTranslation()

    return (
        <header>
            <Typography component='h1' variant='subtitle-bold'>
                {translate('meliFastSearchTitle')}
            </Typography>
            <SearchInput
                ariaLabel={translate('searchProductInputA11y')}
                onClick={onSearch}
                placeholder={translate('searchProductInputPlaceholder')}
            />
        </header>
    )
}

Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default Header