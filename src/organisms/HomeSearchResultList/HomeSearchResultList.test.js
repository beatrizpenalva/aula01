import userEvent from '@testing-library/user-event'
import { useNavigate } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Sample } from './HomeSearchResultList.stories'
import { getProductDetailsUrl } from '../../utils/helpers'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(() => ({
        navigate: jest.fn(),
    }))
}))

describe('HomeSearchResultList', () => {
    test('redirects to product details page when click on a card', () => {
        const navigate = jest.fn()
        useNavigate.mockImplementation(() => navigate)

        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        userEvent.click(screen.getByRole('button', { name: 'Ver detalhes de Samsung Galaxy Folder 2 Dual SIM 16 GB Negro 2 GB RAM' }))

        const url = getProductDetailsUrl('MLA13316403')
        expect(navigate).toHaveBeenCalledWith(url)
    })
})