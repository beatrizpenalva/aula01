
import userEvent from '@testing-library/user-event'
import { useNavigate } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Sample } from './PageWrapper.stories'
import { getSearchResultUrl } from '../../utils/helpers'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(() => ({
        navigate: jest.fn(),
    }))
}))

describe('PageWrapper', () => {
    test('redirects to search result page with properly param on url when click search button', () => {
        const searchId = 'IAmAnId'

        const navigate = jest.fn()
        useNavigate.mockImplementation(() => navigate)

        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        userEvent.type(screen.getByRole('searchbox', { name: 'O que você está buscando?' }), searchId)
        userEvent.click(screen.getByRole('button', { name: 'Pesquisar pelo produto' }))

        const url = getSearchResultUrl(searchId)
        expect(navigate).toHaveBeenCalledWith(url)
    })
})