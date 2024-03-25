import NoPicturesPlaceholder from './NoPicturesPlaceholder'

export default {
    title: 'Atoms/NoPicturesPlaceholder',
    component: NoPicturesPlaceholder,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        border: {
            description: 'Determina se é para renderizar componente com borda'
        },
        height: {
            description: 'Valor da altura do componente'
        },
        width: {
            description: 'Valor da largura do componente'
        },
    },
}

export const WithBorder = {
    args: {
        size: '80px',
        border: true,
    },
}

export const WithoutBorder = {
    args: {
        size: '80px',
    },
}
