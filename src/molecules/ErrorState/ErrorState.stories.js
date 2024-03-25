import ErrorState from './ErrorState'

export default {
    title: 'Molecules/ErrorState',
    component: ErrorState,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        description: {
            description: 'Descrição do erro'
        },
        onTryAgain: {
            description: 'Callback disparado ao clicar no botão de tentar novamente'
        },
    },
}

export const Sample = {
    args: {
        description: 'Uma descrição sobre o que ocorreu',
        onTryAgain: () => { },
    },
}
