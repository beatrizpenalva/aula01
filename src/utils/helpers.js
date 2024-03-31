export const formatCurrency = (value) => {
    const numberValue = Number(value ?? 0)

    const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(numberValue)

    return formatted
}

export const getProductDetailsUrl = id => `/details/${id}`
export const getSearchResultUrl = id => `/result/${id}`