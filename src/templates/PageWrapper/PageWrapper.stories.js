import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import PageWrapper from './PageWrapper'

const routes = [
    {
        path: '/',
        element: <PageWrapper />
    },
]

const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 1,
})

const BaseComponent = () => <RouterProvider router={router} />

export default {
    title: 'Templates/PageWrapper',
    component: BaseComponent,
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
