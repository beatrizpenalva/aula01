import { render, screen } from '@testing-library/react'
import Meta, { Sample, Colored, WithoutValue } from './InfowRow.stories'
import { composeStory } from '@storybook/react';

describe('InfoRow', () => {
    test('render properly style when receive colored prop as false', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(screen.getByTestId('info-row')).toHaveClass('row')
        expect(screen.getByTestId('info-row')).not.toHaveClass('colored')
    })

    test('render properly style when receive colored prop as true', () => {
        const ColoredWrapper = composeStory(Colored, Meta)
        render(<ColoredWrapper />)

        expect(screen.getByTestId('info-row')).toHaveClass('row')
        expect(screen.getByTestId('info-row')).toHaveClass('colored')
    })

    test('does not render component when does not receive value prop', () => {
        const WithoutValueWrapper = composeStory(WithoutValue, Meta)
        render(<WithoutValueWrapper />)

        expect(screen.queryAllByTestId('info-row').length).toBe(0)
    })
})