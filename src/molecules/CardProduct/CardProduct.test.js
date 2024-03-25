import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Sample, WithoutPictures } from './CardProduct.stories'

describe('CardProduct', () => {
    test('render with pictures when receive list from product prop', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(screen.getAllByTestId('card-image').length).toBeGreaterThan(0)
    })

    test('render picture empty state when does not receive pictures list from product prop', () => {
        const WithoutPicturesWrapper = composeStory(WithoutPictures, Meta)
        render(<WithoutPicturesWrapper />)

        expect(screen.getAllByTestId('default-img-container').length).toBeGreaterThan(0)
    })
})