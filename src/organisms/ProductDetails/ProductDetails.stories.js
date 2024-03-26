import ProductDetails from './ProductDetails'
import getProductDetailsResponse from '../../api/fixtures/getProductDetails'

export default {
    title: 'Organisms/ProductDetails',
    component: ProductDetails,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        details: {
            description: 'Array de objetos com informações sobre detalhes técnicos do produto'
        },
        isLoading: {
            description: 'Determina se é para renderizar o estado de loading'
        },
    },
}

export const Sample = {
    args: {
        details: getProductDetailsResponse,
    },
}

export const Loading = {
    args: {
        isLoading: true,
    },
}