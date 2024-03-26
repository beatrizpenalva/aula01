import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Loading, Sample } from './ProductAttributesList.stories'

describe('ProductAttributesList', () => {
    test('rendering loading state', () => {
        const LoadingWrapper = composeStory(Loading, Meta)
        render(<LoadingWrapper />)

        expect(screen.getAllByRole('progressbar').length).toBeGreaterThan(1)
    })

    test('rendering content', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(screen.getByText('Ficha técnica:')).toBeInTheDocument()
    })
})