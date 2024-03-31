import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import SearchResult from './SearchResult'
import searchProductsResponse from '../../api/service/fixtures/searchProductsResponse'
import { getSearchProductsUrl } from '../../api/service/service'

const product = 'Celular'

const routes = [
    {
        path: '/result/:searchId',
        element: <SearchResult />,
    },
]

const router = createMemoryRouter(routes, {
    initialEntries: [`/result/${product}`],
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

const Template = args => <BaseComponent {...args} />

export const Sample = Template.bind({})
Sample.parameters = {
    mockData: [
        {
            url: getSearchProductsUrl(product),
            method: 'GET',
            status: 200,
            response: searchProductsResponse,
            delay: 500,
        },
    ]
}