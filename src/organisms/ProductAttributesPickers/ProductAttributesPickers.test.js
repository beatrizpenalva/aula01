import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Loading, Sample } from './ProductAttributesPickers.stories'

describe('ProductAttributesPickers', () => {
    test('rendenring loading', () => {
        const LoadingWrapper = composeStory(Loading, Meta)
        render(<LoadingWrapper />)

        expect(screen.getAllByRole('progressbar').length).toBeGreaterThan(1)
    })

    test('rendering content', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(screen.getByText('Produto:')).toBeInTheDocument()
    })
})