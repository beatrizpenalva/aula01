import CardProduct from './CardProduct'
import searchProductsResponse from '../../api/fixtures/searchProducts'

export default {
    title: 'Molecules/CardProduct',
    component: CardProduct,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onClick: {
            description: 'Callback disparado ao clicar no card'
        },
        product: {
            description: 'Objeto com informações sobre o produto'
        },
    },
}

export const Sample = {
    args: {
        product: searchProductsResponse.results[0],
        onClick: () => { },
    },
}

export const WithoutPictures = {
    args: {
        product: {
            ...searchProductsResponse.results[0],
            pictures: [],
        },
        onClick: () => { },
    },
}
