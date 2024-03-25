import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Primary, Secondary, Warning } from './Button.stories'

describe('Button', () => {
    test('render properly style when variant is primary', () => {
        const PrimaryWrapper = composeStory(Primary, Meta)
        render(<PrimaryWrapper />)

        expect(screen.getByRole('button', { name: 'Label do botão' })).toHaveClass('primary-button')
    })

    test('render properly style when variant is secondary', () => {
        const SecondaryWrapper = composeStory(Secondary, Meta)
        render(<SecondaryWrapper />)

        expect(screen.getByRole('button', { name: 'Label do botão' })).toHaveClass('secondary-button')
    })

    test('render properly style when variant is warning', () => {
        const WarningWrapper = composeStory(Warning, Meta)
        render(<WarningWrapper />)

        expect(screen.getByRole('button', { name: 'Label do botão' })).toHaveClass('warning-button')
    })
})