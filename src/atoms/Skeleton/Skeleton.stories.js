import Skeleton from './Skeleton'

export default {
    title: 'Atoms/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        height: {
            description: 'Valor da altura do componente'
        },
        styles: {
            description: 'Estilos complementares ao componente'
        },
        width: {
            description: 'Valor da largura do componente'
        },
    },
}

export const Sample = {
    args: {
        height: '24px',
        width: '240px',
    },
}
