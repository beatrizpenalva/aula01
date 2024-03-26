import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Empty, Loading, Sample } from './ProductImagesContainer.stories'

describe('ProductImagesContainer', () => {
    test('rendering loading', () => {
        const LoadingWrapper = composeStory(Loading, Meta)
        render(<LoadingWrapper />)

        expect(screen.getAllByRole('progressbar').length).toBeGreaterThan(1)
    })

    test('rendering empty state', () => {
        const EmptyWrapper = composeStory(Empty, Meta)
        render(<EmptyWrapper />)

        expect(screen.getAllByTestId('default-img-container').length).toBeGreaterThan(1)
    })

    test('rendering content', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(screen.getAllByRole('radio').length).toBeGreaterThan(1)
    })

    test('handle change picture', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        const radioOptions = screen.getAllByRole('radio')

        userEvent.click(radioOptions[0])

        const allImages = screen.getAllByRole('img')
        const mainImage = allImages[allImages.length - 1]

        expect(mainImage).toHaveAttribute('src', 'https://mla-s2-p.mlstatic.com/777713-MLA32660788040_102019-F.jpg')
    })
})