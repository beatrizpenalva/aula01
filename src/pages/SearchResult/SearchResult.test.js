import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Sample } from './SearchResult.stories'
import api from '../../api/api'

describe('SearchResult', () => {
    test('rendering loading and content', async () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(screen.getAllByRole('progressbar').length).toBeGreaterThan(1)

        await waitFor(() => {
            expect(screen.getByText('Resultado da busca para:')).toBeInTheDocument()
        })
    })

    test('rendering empty state', async () => {
        const spyApi = jest.spyOn(api, 'getProducts')
        spyApi.mockReturnValueOnce(() => Promise.resolve([]))

        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(await screen.findByText('Item não encontrado')).toBeInTheDocument()
        expect(screen.getByText('Celular')).toBeInTheDocument()
    })

    test('rendering error state', async () => {
        const spyApi = jest.spyOn(api, 'getProducts')
        spyApi.mockRejectedValueOnce(() => Promise.reject())

        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(await screen.findByText('Não conseguimos efetuar a busca. Por favor, tente novamente.')).toBeInTheDocument()

        userEvent.click(screen.getByRole('button', { name: 'Tentar novamente' }))
        expect(spyApi).toHaveBeenCalledTimes(2)
    })
})