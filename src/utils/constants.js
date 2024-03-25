export const ROUTES = {
    HOME: "/",
    PRODUCT: '/details/:productId',
    SEARCH_RESULT: '/result/:searchId'
}

export const getProductDetailsUrl = id => `/details/${id}`
export const getSearchResultUrl = id => `/result/${id}`