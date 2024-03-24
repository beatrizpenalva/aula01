import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'
import ProductDetails from './pages/ProductDetails'
import { ROUTES } from './utils/constants'

const { HOME, PRODUCT_DETAILS } = ROUTES

const router = createBrowserRouter(
  [
    {
      path: HOME,
      element: <Homepage />,
    },
    {
      path: PRODUCT_DETAILS,
      element: <ProductDetails />
    },
    {
      path: '*',
      element: <PageNotFound />
    }
  ]
)


export default router
