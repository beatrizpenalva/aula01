import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Header from '../../molecules/Header'
import { getSearchResultUrl } from '../../utils/helpers'

const PageWrapper = ({ children }) => {
    const navigate = useNavigate()

    const handleSubmitSearch = value => {
        const url = getSearchResultUrl(value)
        navigate(url)
    }

    return (
        <>
            <Header onSearch={handleSubmitSearch} />
            {children}
        </>
    )
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}


export default PageWrapper