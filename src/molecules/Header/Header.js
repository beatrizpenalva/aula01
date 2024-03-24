import PropTypes from 'prop-types'
import SearchInput from '../../atoms/SearchInput'
import './Header.styles.css'

const Header = ({ onSearch }) => {
    return (
        <header>
            <h1>Meli busca rápida!</h1>
            <SearchInput ariaLabel="Pesquisar pelo produto" onClick={onSearch} />
        </header>
    )
}

Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default Header