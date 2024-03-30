import HomeEmptyState from './HomeEmptyState'

export default {
    title: 'Molecules/HomeEmptyState',
    component: HomeEmptyState,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        product: {
            description: 'Nome do produto'
        },
    },
}

export const Sample = {
    args: {
        product: 'Celular'
    },
}

