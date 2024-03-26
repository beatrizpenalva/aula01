import Radio from './Radio'

export default {
    title: 'Atoms/Radio',
    component: Radio,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        checked: {
            description: 'Determina se o componente está selecionado'
        },
        group: {
            description: 'Identificador do grupo de radio inputs'
        },
        id: {
            description: 'Identificador do input'
        },
        label: {
            description: 'Label do input'
        },
        onChange: {
            description: 'Callback disparado ao clicar no input'
        },
        value: {
            description: 'Valor do input'
        },
    },
}

const defaultProps = {
    group: 'radio-group',
    id: 'input-id',
    label: 'Label',
    onChange: () => { },
    value: 'Valor do input'
}

export const Checked = {
    args: {
        ...defaultProps,
        checked: true,
    },
}

export const Unchecked = {
    args: {
        ...defaultProps,
    },
}
