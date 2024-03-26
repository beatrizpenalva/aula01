import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Checked, Unchecked } from './RadioImage.stories'

describe('RadioImage', () => {
    test('render properly style when input is checked', () => {
        const CheckedWrapper = composeStory(Checked, Meta)
        render(<CheckedWrapper />)

        expect(screen.getByRole('img')).toHaveClass('radio-image-checked')
    })

    test('render properly style when input is unchecked', () => {
        const UncheckedWrapper = composeStory(Unchecked, Meta)
        render(<UncheckedWrapper />)

        expect(screen.getByRole('img')).toHaveClass('radio-image')
    })
})