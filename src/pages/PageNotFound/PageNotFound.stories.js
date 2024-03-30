import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import PageNotFound from './PageNotFound'

const routes = [
    {
        path: '/',
        element: <PageNotFound />,
    },
]

const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 1,
})

const BaseComponent = () => <RouterProvider router={router} />

export default {
    title: 'Pages/PageNotFound',
    component: BaseComponent,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
}

export const Sample = {
    args: {},
}