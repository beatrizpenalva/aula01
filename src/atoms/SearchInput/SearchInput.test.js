import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Sample } from './SearchInput.stories'

describe('SearchInput', () => {
    test('call onClick callback with properly value', () => {
        const onClick = jest.fn()

        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper onClick={onClick} />)

        userEvent.type(screen.getByRole('searchbox', { name: 'O que você está buscando?' }), 'Produto')
        userEvent.click(screen.getByRole('button', { name: 'Buscar' }))

        expect(onClick).toHaveBeenCalledWith('Produto')
    })
})