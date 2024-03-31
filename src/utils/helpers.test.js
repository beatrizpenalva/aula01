import { formatCurrency, getProductDetailsUrl, getSearchResultUrl } from './helpers'

describe('helpers', () => {
    describe('formatCurrency', () => {
        test('return formatted when receive a number value', () => {
            const result = formatCurrency(90.8)
            expect(result).toEqual('R$ 90,80')
        })

        test('return formatted when receive a string value', () => {
            const result = formatCurrency('90.80')
            expect(result).toEqual('R$ 90,80')
        })

        test('return formatted when receive a null value', () => {
            const result = formatCurrency(null)
            expect(result).toEqual('R$ 0,00')
        })

        test('return formatted when receive a undefined value', () => {
            const result = formatCurrency(undefined)
            expect(result).toEqual('R$ 0,00')
        })
    })

    test('getProductDetailsUrl', () => {
        const result = getProductDetailsUrl('IAmAnId')
        expect(result).toEqual('/details/IAmAnId')
    })

    test('getSearchResultUrl', () => {
        const result = getSearchResultUrl('IAmAnId')
        expect(result).toEqual('/result/IAmAnId')
    })
})