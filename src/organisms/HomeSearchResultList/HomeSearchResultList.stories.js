import HomeSearchResultList from './HomeSearchResultList'
import searchProductsResponse from '../../api/fixtures/searchProducts'

export default {
    title: 'Organisms/HomeSearchResultList',
    component: HomeSearchResultList,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        product: {
            description: 'Nome do produto pesquisado'
        },
        productsList: {
            description: 'Array de objetos com informações sobre o produto'
        },
    },
}

export const Sample = {
    args: {
        product: 'Celular',
        productsList: searchProductsResponse.results,
    },
}