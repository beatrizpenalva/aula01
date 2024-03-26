import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import Home from './Home'

const routes = [
    {
        path: '/',
        element: <Home />,
    },
];

const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 1,
})

const BaseComponent = () => <RouterProvider router={router} />

export default {
    title: 'Pages/Home',
    component: BaseComponent,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
}

export const Sample = {
    args: {},
}