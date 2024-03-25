import InfoRow from './InfoRow'

export default {
    title: 'Atoms/InfoRow',
    component: InfoRow,
    excludeStories: ['WithoutValue'],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        colored: {
            description: 'Determina se é para exibir uma linha com cor'
        },
        label: {
            description: 'Título da informação'
        },
        value: {
            description: 'Descrição da informação'
        },
    },
}

const defaultProps = {
    label: 'Uma label qualquer',
    value: 'Um value qualquer',
}

export const Sample = {
    args: {
        ...defaultProps,
    },
}

export const Colored = {
    args: {
        ...defaultProps,
        colored: true,
    },
}

export const WithoutValue = {
    args: {
        ...defaultProps,
        colored: true,
        value: null,
    },
}
