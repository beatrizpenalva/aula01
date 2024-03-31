import PropTypes from 'prop-types'
import SearchInput from '../../atoms/SearchInput'
import Typography from '../../atoms/Typography'
import './Header.styles.css'

const Header = ({ onSearch }) => {
    return (
        <header>
            <Typography component='h1' variant='subtitle-bold'>
                Meli busca rápida!
            </Typography>
            <SearchInput
                ariaLabel="Pesquisar pelo produto"
                onClick={onSearch}
            />
        </header>
    )
}

Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default Header