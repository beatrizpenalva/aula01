import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import EmptyState from './EmptyState'
import ErrorState from '../../molecules/ErrorState'
import Header from '../../molecules/Header'
import InitialState from './InitialState'
import LoadingState from './LoadingState'
import SearchResultList from './SearchResultList'
import useSearchProducts from '../../hooks/useSearchProducts'

const ERROR_DESCRIPTION = 'Não conseguimos efetuar a busca. Por favor, tente novamente.'

const Homepage = () => {
    const location = useLocation()
    const { state: { search } } = location

    const [product, setProduct] = useState(search ?? '')

    const {
        getProductsAvailable,
        isEmpty,
        isError,
        isLoading,
        productsList,
        renderContent,
        renderInitialState
    } = useSearchProducts({ product })

    const handleSubmitProduct = (value) => {
        setProduct(value)
        getProductsAvailable()
    }

    useEffect(() => {
        getProductsAvailable()
    }, [product])

    return (
        <>
            <Header onSearch={handleSubmitProduct} />
            {isLoading ? (<LoadingState />) : (
                <>
                    {isError && (<ErrorState description={ERROR_DESCRIPTION} onTryAgain={getProductsAvailable} />)}
                    {renderInitialState && (<InitialState />)}
                    {isEmpty && (<EmptyState product={product} />)}
                    {renderContent && (<SearchResultList product={product} productsList={productsList} />)}
                </>
            )}
        </>
    )
}

export default Homepage