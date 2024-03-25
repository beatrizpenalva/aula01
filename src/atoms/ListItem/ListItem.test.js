import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { WithMarker, WithoutMarker } from './ListItem.stories'

describe('ListItem', () => {
    test('render marker component when show marker is true', () => {
        const WithMarkerWrapper = composeStory(WithMarker, Meta)
        render(<WithMarkerWrapper />)

        expect(screen.getByTestId('marker')).toBeInTheDocument()
        expect(screen.getByText('Um texto para um item')).toBeInTheDocument()
    })

    test('does not render marker component when show marker is false', () => {
        const WithoutMarkerWrapper = composeStory(WithoutMarker, Meta)
        render(< WithoutMarkerWrapper />)

        expect(screen.queryByTestId('marker')).not.toBeInTheDocument()
        expect(screen.getByText('Um texto para um item')).toBeInTheDocument()
    })
})