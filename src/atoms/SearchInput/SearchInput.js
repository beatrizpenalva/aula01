import PropTypes from 'prop-types'
import { useState } from 'react'
import Button from '../Button'
import './SearchInput.styles.css'

const SearchInput = ({ ariaLabel, onClick, placeholder }) => {
    const [value, setValue] = useState({})

    const handleSubmit = () => {
        value.preventDefault()
        onClick(value.target.value)
    }

    return (
        <form onSubmit={e => e.preventDefault()} role="search" className="container">
            <label htmlFor="search">O que você está buscando?</label>
            <div className="input-container">
                <input
                    type="search"
                    id="search"
                    name="search"
                    onChange={e => setValue(e)}
                    placeholder={placeholder}
                />
                <Button
                    ariaLabel={ariaLabel}
                    onClick={handleSubmit}
                    type="submit"
                >
                    Buscar
                </Button>
            </div>
        </form>
    )
}

SearchInput.propTypes = {
    ariaLabel: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
}

SearchInput.defaultProps = {
    ariaLabel: '',
    placeholder: 'Buscar produtos',
}

export default SearchInput