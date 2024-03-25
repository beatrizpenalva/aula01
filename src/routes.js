import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorBoundary from './molecules/ErrorBoundary'
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
      errorElement: <ErrorBoundary />,
    },
    {
      path: PRODUCT,
      element: <Product />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: '*',
      element: <PageNotFound />,
    }
  ]
)


export default router
