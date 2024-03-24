import { useState } from 'react'
import EmptyState from './EmptyState'
import ErrorState from '../../molecules/ErrorState'
import Header from '../../molecules/Header'
import InitialState from './InitialState'
import LoadingState from './LoadingState'
import SearchResultList from './SearchResultList'
import useSearchProducts from '../../hooks/useSearchProducts'

const ERROR_DESCRIPTION = 'Não conseguimos efetuar a busca. Por favor, tente novamente.'

const Homepage = () => {
    const [product, setProduct] = useState('')

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