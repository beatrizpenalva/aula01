import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'
import { ROUTES } from './utils/constants'

const { HOME, PRODUCT } = ROUTES

const router = createBrowserRouter(
  [
    {
      path: HOME,
      element: <Homepage />,
    },
    {
      path: PRODUCT,
      element: <Product />
    },
    {
      path: '*',
      element: <PageNotFound />
    }
  ]
)


export default router
