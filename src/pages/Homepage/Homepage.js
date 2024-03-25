import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ErrorState from '../../molecules/ErrorState'
import Header from '../../molecules/Header'
import HomeEmptyState from '../../molecules/HomeEmptyState'
import HomeInitialState from '../../molecules/HomeInitialState'
import HomeLoadingState from '../../molecules/HomeLoadingState'
import HomeSearchResultList from '../../organisms/HomeSearchResultList'
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
            {isLoading ? (<HomeLoadingState />) : (
                <>
                    {isError && (<ErrorState description={ERROR_DESCRIPTION} onTryAgain={getProductsAvailable} />)}
                    {renderInitialState && (<HomeInitialState />)}
                    {isEmpty && (<HomeEmptyState product={product} />)}
                    {renderContent && (<HomeSearchResultList product={product} productsList={productsList} />)}
                </>
            )}
        </>
    )
}

export default Homepage