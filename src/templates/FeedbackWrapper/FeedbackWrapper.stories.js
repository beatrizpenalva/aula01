import FeedbackWrapper from './FeedbackWrapper'

export default {
    title: 'Templates/FeedbackWrapper',
    component: FeedbackWrapper,
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
