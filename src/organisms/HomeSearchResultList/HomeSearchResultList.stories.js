import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import HomeSearchResultList from './HomeSearchResultList'
import searchProductsResponse from '../../api/service/fixtures/searchProductsResponse'

const routes = [
    {
        path: '/',
        element: <HomeSearchResultList product='Celular' productsList={searchProductsResponse.results} />,
    },
]

const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 1,
})

const BaseComponent = args => <RouterProvider router={router} {...args} />

export default {
    title: 'Organisms/HomeSearchResultList',
    component: BaseComponent,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        product: {
            description: 'Nome do produto pesquisado'
        },
        productsList: {
            description: 'Array de objetos com informações sobre o produto'
        },
    },
}

export const Sample = {
    args: {},
}