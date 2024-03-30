import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import SearchResult from './SearchResult'

const routes = [
    {
        path: '/result/:searchId',
        element: <SearchResult />,
    },
]

const router = createMemoryRouter(routes, {
    initialEntries: ['/result/423423423'],
    initialIndex: 1,
})

const BaseComponent = () => <RouterProvider router={router} />

export default {
    title: 'Pages/SearchResult',
    component: BaseComponent,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
}

export const Sample = {
    args: {},
}