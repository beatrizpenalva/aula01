import ProductAttributesList from './ProductAttributesList'
import getProductDetailsResponse from '../../api/fixtures/getProductDetails'

export default {
    title: 'Organisms/ProductAttributesList',
    component: ProductAttributesList,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        attributes: {
            description: 'Array de objetos com informações sobre detalhes técnicos do produto'
        },
        isLoading: {
            description: 'Determina se é para renderizar o estado de loading'
        },
    },
}

export const Sample = {
    args: {
        attributes: getProductDetailsResponse.attributes,
    },
}

export const Loading = {
    args: {
        isLoading: true,
    },
}