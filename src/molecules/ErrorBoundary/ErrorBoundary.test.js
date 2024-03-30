import userEvent from '@testing-library/user-event'
import { useNavigate } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Sample } from './ErrorBoundary.stories'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(() => ({
        navigate: jest.fn(),
    }))
}))

describe('ErrorBoundary', () => {
    test('redirects to home page when click on go back button', () => {
        const navigate = jest.fn()
        useNavigate.mockImplementation(() => navigate)

        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        userEvent.click(screen.getByRole('button', { name: 'Voltar ao início' }))

        expect(navigate).toHaveBeenCalledWith('/')
    })
})