import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Loading, Sample } from './ProductDetails.stories'

describe('ProductDetails', () => {
    test('rendering loading state', () => {
        const LoadingWrapper = composeStory(Loading, Meta)
        render(<LoadingWrapper />)

        expect(screen.getAllByRole('progressbar').length).toBeGreaterThan(1)
        expect(screen.queryByText('Descrição:')).not.toBeInTheDocument()
        expect(screen.queryByText('O que você precisa saber sobre este produto:')).not.toBeInTheDocument()
    })

    test('rendering content', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
        expect(screen.getByText('Descrição:')).toBeInTheDocument()
        expect(screen.getByText('O que você precisa saber sobre este produto:')).toBeInTheDocument()
    })

    test('handle changing picker', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        userEvent.click(screen.getByRole('radio', { name: 'Gold' }))

        expect(screen.getByRole('radio', { name: 'Gold' })).toBeChecked()
        expect(screen.getByRole('radio', { name: 'Silver' })).not.toBeChecked()

        userEvent.click(screen.getByRole('radio', { name: 'Silver' }))

        expect(screen.getByRole('radio', { name: 'Gold' })).not.toBeChecked()
        expect(screen.getByRole('radio', { name: 'Silver' })).toBeChecked()
    })
})