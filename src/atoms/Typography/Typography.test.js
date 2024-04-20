import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Sample } from './Typography.stories'

describe('Typography', () => {
    test('add properly class when variant is paragraph-xsmall-regular', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper variant='paragraph-xsmall-regular' />)

        expect(screen.getByRole('paragraph')).toHaveClass('paragraph-xsmall-regular')
    })

    test('add properly class when variant is paragraph-sm-regular', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper variant='paragraph-sm-regular' />)

        expect(screen.getByRole('paragraph')).toHaveClass('paragraph-sm-regular')
    })

    test('add properly class when variant is paragraph-sm-regular-erased', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper variant='paragraph-sm-regular-erased' />)

        expect(screen.getByRole('paragraph')).toHaveClass('paragraph-sm-regular-erased')
    })

    test('add properly class when variant is paragraph-sm-medium', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper variant='paragraph-sm-medium' />)

        expect(screen.getByRole('paragraph')).toHaveClass('paragraph-sm-medium')
    })

    test('add properly class when variant is paragraph-lg-regular', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper />)

        expect(screen.getByRole('paragraph')).toHaveClass('paragraph-lg-regular')
    })

    test('add properly class when variant is sr-only', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper variant='sr-only' />)

        expect(screen.getByRole('paragraph')).toHaveClass('sr-only')
    })

    test('add properly class when variant is subtitle-regular', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper variant='subtitle-regular' />)

        expect(screen.getByRole('paragraph')).toHaveClass('subtitle-regular')
    })

    test('add properly class when variant is subtitle-medium', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper variant='subtitle-medium' />)

        expect(screen.getByRole('paragraph')).toHaveClass('subtitle-medium')
    })

    test('add properly class when variant is subtitle-bold', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper variant='subtitle-bold' />)

        expect(screen.getByRole('paragraph')).toHaveClass('subtitle-bold')
    })

    test('add properly class when variant is title-bold', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper variant='title-bold' />)

        expect(screen.getByRole('paragraph')).toHaveClass('title-bold')
    })

    test('add other component than paragraph when receive info from prop', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper component='h1' />)

        expect(screen.getByRole('h1')).toBeInTheDocument()
    })

    test('add custom class when receive info from prop', () => {
        const SampleWrapper = composeStory(Sample, Meta)
        render(<SampleWrapper className='customClass' />)

        expect(screen.getByRole('paragraph')).toHaveClass('customClass')
    })
})