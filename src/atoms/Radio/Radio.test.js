import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Checked, Unchecked } from './Radio.stories'

describe('Radio', () => {
    test('render properly style when input is checked', () => {
        const CheckedWrapper = composeStory(Checked, Meta)
        render(<CheckedWrapper />)

        expect(screen.getByTestId('radio-container')).toHaveClass('radio-input-container')
        expect(screen.getByTestId('radio-container')).toHaveClass('radio-checked')
    })

    test('render properly style when input is unchecked', () => {
        const UncheckedWrapper = composeStory(Unchecked, Meta)
        render(<UncheckedWrapper />)

        expect(screen.getByTestId('radio-container')).toHaveClass('radio-input-container')
        expect(screen.getByTestId('radio-container')).not.toHaveClass('radio-checked')
    })
})