import ProductAttributesPickers from './ProductAttributesPickers'
import getProductDetailsResponse from '../../api/fixtures/getProductDetails'

export default {
    title: 'Organisms/ProductAttributesPickers',
    component: ProductAttributesPickers,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        checkedPickers: {
            description: 'Array de objetos com informações sobre as opções selecionadas'
        },
        isLoading: {
            description: 'Determina se é para renderizar o estado de loading'
        },
        onChange: {
            description: 'Callback disparado ao clicar em uma das opções'
        },
        pickers: {
            description: 'Array de objetos com informações sobre as opções do produto'
        },
        productName: {
            description: 'Nome do produto'
        },
    },
}

export const Loading = {
    args: {
        isLoading: true,
        onChange: () => { },
    },
}

export const Sample = {
    args: {
        onChange: () => { },
        pickers: getProductDetailsResponse.pickers,
        productName: 'Celular com mação no fundo',
    },
}