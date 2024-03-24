import PropTypes from 'prop-types'
import { useState } from 'react'
import Button from '../Button'
import './SearchInput.styles.css'

const SearchInput = ({ ariaLabel, onClick }) => {
    const [value, setValue] = useState('')

    return (
        <div className="container">
            <label htmlFor="search">O que você está buscando?</label>
            <div className="input-container">
                <input type="search" id="search" name="search" onChange={e => setValue(e.target.value)} />
                <Button ariaLabel={ariaLabel} onClick={() => onClick(value)} type="submit">Buscar</Button>
            </div>
        </div>
    )
}

SearchInput.propTypes = {
    ariaLabel: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

SearchInput.defaultProps = {
    ariaLabel: '',
}

export default SearchInput