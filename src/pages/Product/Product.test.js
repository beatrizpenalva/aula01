import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Sample } from './Product.stories'
import api from '../../api/api'

describe('Product', () => {
    test('rendering loading and content', async () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(screen.getAllByRole('progressbar').length).toBeGreaterThan(1)

        await waitFor(() => {
            expect(screen.getByText('Ficha técnica:')).toBeInTheDocument()
        })
    })

    test('rendering error state and call properly callback on try again', async () => {
        const spyApi = jest.spyOn(api, 'getDetails')
        spyApi.mockRejectedValueOnce(() => Promise.reject())

        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        await waitFor(() => {
            expect(screen.getByText('Ocorreu um erro')).toBeInTheDocument()
        })

        userEvent.click(screen.getByRole('button', { name: 'Tentar novamente' }))

        expect(spyApi).toHaveBeenCalledTimes(2)
    })
})