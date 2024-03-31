import ProductDescription from './ProductDescription'
import getProductDetailsResponse from '../../api/service/fixtures/getProductDetailsResponse'

export default {
    title: 'Molecules/ProductDescription',
    component: ProductDescription,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        isAvailable: {
            description: 'Determina se o produto está disponível'
        },
        isFreeShipping: {
            description: 'Determina se o produto tem frete grátis'
        },
        isLoading: {
            description: 'Determina se é para renderizar o estado de loading'
        },
        isNew: {
            description: 'Determia se o produto é novo'
        },
        salePrice: {
            description: 'Valor do produto na promoção'
        },
        saleTerms: {
            description: 'Array com informações sobre a venda do produto'
        },
        title: {
            description: 'Nome do produto'
        },
        value: {
            description: 'Valor original do produto'
        },
    },
}

const defaultProps = {
    salePrice: '400.00',
    title: 'Produto XPTO',
    value: '600.00',
}

export const Sample = {
    args: {
        ...defaultProps,
        isAvailable: true,
        isFreeShipping: true,
        isNew: true,
        saleTerms: getProductDetailsResponse.sale_terms,
    },
}

export const WithoutExtraInfo = {
    ...defaultProps,
}

export const Loading = {
    ...defaultProps,
    isLoading: true,
}