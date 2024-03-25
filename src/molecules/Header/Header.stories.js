import Header from './Header'

export default {
    title: 'Molecules/Header',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onSearch: {
            description: 'Callback passado para input de busca'
        },
    },
}

export const Sample = {
    args: {
        onSearch: () => { },
    },
}
