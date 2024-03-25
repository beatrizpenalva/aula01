import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'
import { ROUTES } from './utils/constants'

const { HOME, PRODUCT } = ROUTES

const router = createBrowserRouter(
  [
    {
      path: HOME,
      element: <Home />,
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
