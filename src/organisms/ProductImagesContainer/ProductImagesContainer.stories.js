import ProductImagesContainer from './ProductImagesContainer'
import getProductDetailsResponse from '../../api/fixtures/getProductDetails'

export default {
    title: 'Organisms/ProductImagesContainer',
    component: ProductImagesContainer,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        isLoading: {
            description: 'Determina se é para renderizar o estado de loading'
        },
        pictures: {
            description: 'Array de objetos com informações sobre as imagens do produto'
        },
    },
}

export const Empty = {
    args: {},
}

export const Sample = {
    args: {
        pictures: getProductDetailsResponse.pictures,
    },
}

export const Loading = {
    args: {
        isLoading: true,
    },
}