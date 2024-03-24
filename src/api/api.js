import searchProductsMock from './fixtures/searchProducts'

const searchProducts = async ({ product }) => {
    console.log(product)

    const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(searchProductsMock)
        }, 1000)
    })

    return response
}

export default {
    searchProducts,
}