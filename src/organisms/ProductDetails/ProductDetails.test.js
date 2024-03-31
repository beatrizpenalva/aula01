import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Loading, Sample } from './ProductDetails.stories'

describe('ProductDetails', () => {
    test('rendering loading state', () => {
        const LoadingWrapper = composeStory(Loading, Meta)
        render(<LoadingWrapper />)

        expect(screen.getAllByRole('progressbar').length).toBeGreaterThan(1)
        expect(screen.queryByText('Ficha técnica:')).not.toBeInTheDocument()
    })

    test('rendering content', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
        expect(screen.getByText('Ficha técnica:')).toBeInTheDocument()
    })
})