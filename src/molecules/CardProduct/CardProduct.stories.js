import CardProduct from './CardProduct'
import searchProductsResponse from '../../api/service/fixtures/searchProductsResponse'

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
            official_store_name: '',
            shipping: {
                free_shpping: false,
            },
            thumbnail: '',
        },
        onClick: () => { },
    },
}
