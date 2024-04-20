import Typography from './Typography'

export default {
    title: 'Atoms/Typography',
    component: Typography,
    excludeStories: ['Sample'],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        children: {
            description: 'Pode ser um componente filho ou uma string a ser exibida'
        },
        className: {
            description: 'Classe de estilo complementar'
        },
        component: {
            description: 'Papel (role) a ser atribuído ao componente'
        },
        variant: {
            description: 'Determina o estilo a ser aplicado no componente'
        },
    },
}

export const AllVariants = () => (
    <div style={{ display: 'flex', gap: '32px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <Typography>
                paragraph-xsmall-regular
            </Typography>
            <Typography variant='paragraph-xsmall-regular'>
                Eu sou um exemplo
            </Typography>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <Typography>
                paragraph-sm-regular
            </Typography>
            <Typography variant='paragraph-sm-regular'>
                Eu sou um exemplo
            </Typography>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <Typography>
                paragraph-sm-regular-erased
            </Typography>
            <Typography variant='paragraph-sm-regular-erased'>
                Eu sou um exemplo
            </Typography>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <Typography>
                paragraph-sm-medium
            </Typography>
            <Typography variant='paragraph-sm-medium'>
                Eu sou um exemplo
            </Typography>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <Typography>
                paragraph-lg-regular
            </Typography>
            <Typography variant='paragraph-lg-regular'>
                Eu sou um exemplo
            </Typography>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <Typography>
                subtitle-regular
            </Typography>
            <Typography variant='subtitle-regular'>
                Eu sou um exemplo
            </Typography>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <Typography>
                subtitle-medium
            </Typography>
            <Typography variant='subtitle-medium'>
                Eu sou um exemplo
            </Typography>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <Typography>
                subtitle-bold
            </Typography>
            <Typography variant='subtitle-bold'>
                Eu sou um exemplo
            </Typography>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <Typography>
                title-bold
            </Typography>
            <Typography variant='title-bold'>
                Eu sou um exemplo
            </Typography>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <Typography>
                sr-only, para me testar use o leitor de tela
            </Typography>
            <Typography variant='sr-only'>
                Eu sou um exemplo
            </Typography>
        </div>
    </div>
)

export const Sample = args => <Typography {...args}>Eu sou um exemplo</Typography>