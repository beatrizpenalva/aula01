import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'

const routes = [
    {
        path: '/',
        element: <ErrorBoundary />
    },
]

const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 1,
})

const BaseComponent = () => <RouterProvider router={router} />


export default {
    title: 'Molecules/ErrorBoundary',
    component: BaseComponent,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
}

export const Sample = {
    args: {},
}

