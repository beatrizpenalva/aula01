import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Sample, WithoutPictures } from './CardProduct.stories'

describe('CardProduct', () => {
    test('render with pictures, free shipping and store name when receive list from product prop', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(screen.getAllByTestId('card-image').length).toBeGreaterThan(0)
        expect(screen.getByText('Frete grátis')).toBeInTheDocument()
        expect(screen.getByText('Por VIKING')).toBeInTheDocument()
    })

    test('render picture empty state when does not receive pictures list from product prop', () => {
        const WithoutPicturesWrapper = composeStory(WithoutPictures, Meta)
        render(<WithoutPicturesWrapper />)

        expect(screen.getAllByTestId('default-img-container').length).toBeGreaterThan(0)
        expect(screen.queryByText('Frete grátis')).not.toBeInTheDocument()
        expect(screen.queryByText('Por VIKING')).not.toBeInTheDocument()
    })
})
