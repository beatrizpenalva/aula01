import ProductAttributesList from './ProductAttributesList'
import searchProductsResponse from '../../api/service/fixtures/searchProductsResponse'

export default {
    title: 'Organisms/ProductAttributesList',
    component: ProductAttributesList,
    decorators: [Story => (
        <div style={{ width: '800px' }}>
            <Story />
        </div>
    )],
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
        attributes: searchProductsResponse.results[0].attributes,
    },
}

export const Loading = {
    args: {
        isLoading: true,
    },
}