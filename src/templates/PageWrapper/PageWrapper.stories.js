import PageWrapper from './PageWrapper'

export default {
    title: 'Templates/PageWrapper',
    component: PageWrapper,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        children: {
            description: 'Componentes dos inputs filhos do grupo',
        },
    },
}

export const Sample = {
    args: {
        children: <h1>Aqui poderia ser qualquer conteúdo</h1>
    },
}
