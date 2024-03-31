import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Loading, Sample, WithoutExtraInfo } from './ProductDescription.stories'

describe('ProductDescription', () => {
    test('rendering loading', () => {
        const LoadingWrapper = composeStory(Loading, Meta)
        render(<LoadingWrapper />)

        expect(screen.getAllByRole('progressbar').length).toBeGreaterThan(1)
    })

    test('render extra info', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(screen.getByText('Novo')).toBeInTheDocument()
        expect(screen.getByText('Frete grátis')).toBeInTheDocument()
        expect(screen.getByText('O que você precisa saber sobre este produto:')).toBeInTheDocument()
        expect(screen.getByText('Compre agora')).toBeInTheDocument()
    })

    test('does not render extra info', () => {
        const WithoutExtraInfoWrapper = composeStory(WithoutExtraInfo, Meta)
        render(<WithoutExtraInfoWrapper />)

        expect(screen.getByText('Produto XPTO')).toBeInTheDocument()
        expect(screen.getByText('R$ 600,00')).toBeInTheDocument()
        expect(screen.getByText('R$ 400,00')).toBeInTheDocument()

        expect(screen.queryByText('Novo')).not.toBeInTheDocument()
        expect(screen.queryByText('Compre agora')).not.toBeInTheDocument()
        expect(screen.queryByText('Frete grátis')).not.toBeInTheDocument()
        expect(screen.queryByText('O que você precisa saber sobre este produto:')).not.toBeInTheDocument()
    })
})