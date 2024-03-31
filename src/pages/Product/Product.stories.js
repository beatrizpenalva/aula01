import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import Product from './Product'
import { getProductDetailsUrl } from '../../api/service/service'
import getProductDetailsResponse from '../../api/service/fixtures/getProductDetailsResponse'

const productId = 'ABCDEFGZZZZ'
const routes = [
    {
        path: '/details/:productId',
        element: <Product />,
    },
]

const router = createMemoryRouter(routes, {
    initialEntries: [`/details/${productId}`],
    initialIndex: 1,
})

const BaseComponent = args => <RouterProvider router={router} {...args} />

export default {
    title: 'Pages/Product',
    component: BaseComponent,
    parameter: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
}

const Template = args => <BaseComponent {...args} />

export const Sample = Template.bind({})
Sample.parameters = {
    mockData: [
        {
            url: getProductDetailsUrl(productId),
            method: 'GET',
            status: 200,
            response: getProductDetailsResponse,
            delay: 500,
        },
    ]
}