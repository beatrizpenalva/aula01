import SearchInput from './SearchInput'

export default {
    title: 'Atoms/SearchInput',
    component: SearchInput,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        ariaLabel: {
            description: 'Valor a ser indexado ao aria-label'
        },
        onClick: {
            description: 'Callback disparado ao clicar no botão'
        },
    },
}

export const Sample = {
    args: {
        onClick: () => { },
    },
}
