import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ErrorState from '../../molecules/ErrorState'
import HomeEmptyState from '../../molecules/HomeEmptyState'
import HomeInitialState from '../../molecules/HomeInitialState'
import HomeLoadingState from '../../molecules/HomeLoadingState'
import HomeSearchResultList from '../../organisms/HomeSearchResultList'
import PageWrapper from '../../templates/PageWrapper'
import useSearchProducts from '../../hooks/useSearchProducts'
import useSessionToken from '../../hooks/useSessionToken'

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

    const {
        getSessionToken,
        isInitialError,
        isInitialLoading,
    } = useSessionToken()

    useEffect(() => {
        if (!searchId) return
        getSessionToken()
        getProductsAvailable(searchId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchId])

    return (
        <PageWrapper>
            {!searchId ? (<HomeInitialState />) : (
                <>
                    {(isLoading || isInitialLoading) && <HomeLoadingState />}
                    {(isError || isInitialError) && (<ErrorState description={ERROR_DESCRIPTION} onTryAgain={() => getProductsAvailable(searchId)} />)}
                    {isEmpty && (<HomeEmptyState product={searchId} />)}
                    {renderContent && (<HomeSearchResultList product={searchId} productsList={productsList} />)}
                </>
            )}
        </PageWrapper>
    )
}

export default SearchResult