import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Horizontal, Vertical, WithoutLabel } from './RadioGroup.stories'

describe('RadioGroup', () => {
    test('render properly style when variant is horizontal', () => {
        const HorizontalWrapper = composeStory(Horizontal, Meta)
        render(<HorizontalWrapper />)

        expect(screen.getByRole('group', { name: 'Label' })).toHaveClass('radio-group-horizontal')
    })

    test('render properly style when variant is vertical', () => {
        const VerticalWrapper = composeStory(Vertical, Meta)
        render(<VerticalWrapper />)

        expect(screen.getByRole('group', { name: 'Label' })).toHaveClass('radio-group-vertical')
    })

    test('render legend when receive label prop', () => {
        const VerticalWrapper = composeStory(Vertical, Meta)
        render(<VerticalWrapper />)

        expect(screen.getByRole('group', { name: 'Label' })).toBeInTheDocument()
    })

    test('does not render legend if receive label prop as an empty string', () => {
        const WithoutLabelWrapper = composeStory(WithoutLabel, Meta)
        render(<WithoutLabelWrapper />)

        expect(screen.queryByRole('group', { name: 'Label' })).not.toBeInTheDocument()
    })
})