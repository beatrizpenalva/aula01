import Stamp from './Stamp'

export default {
    title: 'Atoms/Stamp',
    component: Stamp,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        text: {
            description: 'Valor a ser exibido'
        },
    },
}

export const Sample = {
    args: {
        text: 'Texto',
    },
}
