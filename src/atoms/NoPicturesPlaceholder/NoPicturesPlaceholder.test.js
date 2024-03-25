import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { WithBorder, WithoutBorder } from './NoPicturesPlaceholder.stories'

describe('NoPicturesPlaceholder', () => {
    test('render properly style when border is true', () => {
        const WithBorderWrapper = composeStory(WithBorder, Meta)
        render(<WithBorderWrapper />)

        expect(screen.getByTestId('default-img-container')).toHaveClass('no-pictures-container')
        expect(screen.getByTestId('default-img-container')).toHaveClass('no-pictures-container-with-border')
    })

    test('render properly style when border is false', () => {
        const WithoutMarkerWrapper = composeStory(WithoutBorder, Meta)
        render(<WithoutMarkerWrapper />)

        expect(screen.getByTestId('default-img-container')).toHaveClass('no-pictures-container')
        expect(screen.getByTestId('default-img-container')).not.toHaveClass('no-pictures-container-with-border')
    })
})