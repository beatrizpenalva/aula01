import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ErrorState from '../../molecules/ErrorState'
import HomeEmptyState from '../../molecules/HomeEmptyState'
import HomeInitialState from '../../molecules/HomeInitialState'
import HomeLoadingState from '../../molecules/HomeLoadingState'
import HomeSearchResultList from '../../organisms/HomeSearchResultList'
import PageWrapper from '../../templates/PageWrapper'
import useSearchProducts from '../../hooks/useSearchProducts'
import useTranslation from '../../hooks/useTranslation'

const SearchResult = () => {
    const { searchId } = useParams()
    const { translate } = useTranslation()
    const {
        getProductsAvailable,
        isEmpty,
        isError,
        isLoading,
        productsList,
        renderContent,
    } = useSearchProducts()

    useEffect(() => {
        if (!searchId) return
        getProductsAvailable(searchId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchId])

    return (
        <PageWrapper>
            {!searchId ? (<HomeInitialState />) : (
                <>
                    {isLoading && <HomeLoadingState />}
                    {isError && (<ErrorState description={translate('searchResultError')} onTryAgain={() => getProductsAvailable(searchId)} />)}
                    {isEmpty && (<HomeEmptyState product={searchId} />)}
                    {renderContent && (<HomeSearchResultList product={searchId} productsList={productsList} />)}
                </>
            )}
        </PageWrapper>
    )
}

export default SearchResult