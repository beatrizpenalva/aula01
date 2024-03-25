import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ErrorState from '../../molecules/ErrorState'
import HomeEmptyState from '../../molecules/HomeEmptyState'
import HomeLoadingState from '../../molecules/HomeLoadingState'
import HomeSearchResultList from '../../organisms/HomeSearchResultList'
import PageWrapper from '../../templates/PageWrapper'
import useSearchProducts from '../../hooks/useSearchProducts'

const ERROR_DESCRIPTION = 'Não conseguimos efetuar a busca. Por favor, tente novamente.'

const SearchResult = () => {
    const { searchId } = useParams()
    const {
        getProductsAvailable,
        isEmpty,
        isError,
        isLoading,
        productsList,
        renderContent,
    } = useSearchProducts()

    useEffect(() => {
        getProductsAvailable(searchId)
    }, [searchId])

    return (
        <PageWrapper>
            {isLoading ? (<HomeLoadingState />) : (
                <>
                    {isError && (<ErrorState description={ERROR_DESCRIPTION} onTryAgain={() => getProductsAvailable(searchId)} />)}
                    {isEmpty && (<HomeEmptyState product={searchId} />)}
                    {renderContent && (<HomeSearchResultList product={searchId} productsList={productsList} />)}
                </>
            )}
        </PageWrapper>
    )
}

export default SearchResult