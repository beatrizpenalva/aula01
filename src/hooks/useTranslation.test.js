import { renderHook } from '@testing-library/react'
import useTranslation from './useTranslation'

describe('useTranslation', () => {
    test('return translate string when receive key value and exists', () => {
        const { result } = renderHook(() => useTranslation())

        const functionResult = result.current.translate('new')
        expect(functionResult).toEqual('Novo')
    })

    test('return translate string with dynamic values', () => {
        const { result } = renderHook(() => useTranslation())

        const functionResult = result.current.translate('by', { description: 'Gal' })
        expect(functionResult).toEqual('Por: Gal')
    })

    test('throw error when translate key doest not exists', () => {
        const { result } = renderHook(() => useTranslation())

        expect(() => result.current.translate('baby')).toThrow(Error('Translate key baby it is not created at file ptBR'))
    })

    test('returns span component with word highlighting in bold', () => {
        const { result } = renderHook(() => useTranslation())

        const functionResult = result.current.translate('searchResultProduct', { product: 'dendê' })
        expect(functionResult).toEqual(<span dangerouslySetInnerHTML={{ "__html": "Resultado da busca para: <b>dendê</b>" }} />)
    })
})