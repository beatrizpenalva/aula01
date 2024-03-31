export const formatCurrency = (value) => {
    const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)

    return formatted
}

export const getProductDetailsUrl = id => `/details/${id}`
export const getSearchResultUrl = id => `/result/${id}`