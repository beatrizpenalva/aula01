import PropTypes from 'prop-types'
import Header from '../../molecules/Header'
import useSearchProducts from '../../hooks/useSearchProducts'

const PageWrapper = ({ children }) => {
    const { getProductsAvailable } = useSearchProducts()

    return (
        <Header onSearch={getProductsAvailable}>
            {children}
        </Header>
    )
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}


export default PageWrapper