import ListItem from './ListItem'

export default {
    title: 'Atoms/ListItem',
    component: ListItem,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        children: {
            description: 'Componente filho'
        },
        showMarker: {
            description: 'Determina se é para exibir o marcador do item da lista'
        },
    },
}

const defaultProps = {
    children: 'Um texto para um item',
}

export const WithMarker = {
    args: {
        ...defaultProps,
        showMarker: true,
    },
}

export const WithoutMarker = {
    args: {
        ...defaultProps,
    },
}
