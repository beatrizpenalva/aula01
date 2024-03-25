import Button from './Button'

export default {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        ariaLabel: {
            description: 'Valor a ser indexado ao aria-label'
        },
        children: {
            description: 'Componente filho'
        },
        onClick: {
            description: 'Callback disparado ao clicar no botão'
        },
        type: {
            description: 'Tipo de input'
        },
        variant: {
            description: 'Determina o estilo do botão'
        },
    },
}

const defaultProps = {
    children: 'Label do botão',
    onClick: () => { },
}

export const Primary = {
    args: {
        ...defaultProps,
    },
}

export const Secondary = {
    args: {
        ...defaultProps,
        variant: 'secondary',
    },
}

export const Warning = {
    args: {
        ...defaultProps,
        variant: 'warning',
    },
}
