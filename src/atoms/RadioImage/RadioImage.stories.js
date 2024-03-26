import RadioImage from './RadioImage'

export default {
    title: 'Atoms/RadioImage',
    component: RadioImage,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        alt: {
            description: 'Texto alternativo para leitor de tela a imagem',
        },
        checked: {
            description: 'Determina se o componente está selecionado'
        },
        group: {
            description: 'Identificador do grupo de radio inputs'
        },
        id: {
            description: 'Identificador do input'
        },
        onChange: {
            description: 'Callback disparado ao clicar no input'
        },
        url: {
            description: 'Url da imagem'
        },
        value: {
            description: 'Valor do input'
        },
    },
}

const defaultProps = {
    group: 'radio-group',
    id: 'input-id',
    onChange: () => { },
    url: 'https://mla-s1-p.mlstatic.com/611193-MLA32649508843_102019-I.jpg',
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
