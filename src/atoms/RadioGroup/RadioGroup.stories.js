import RadioGroup from './RadioGroup'
import Radio from '../Radio'

export default {
    title: 'Atoms/RadioGroup',
    component: RadioGroup,
    // excludeStories: ['WithoutLabel'],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        children: {
            description: 'Componentes dos inputs filhos do grupo',
        },
        label: {
            description: 'Label do grupo de inputs'
        },
        value: {
            description: 'Valor do grupo de inputs'
        },
    },
}

const props = {
    group: 'group-1',
    onChange: () => { },
}

const defaultProps = {
    label: 'Label',
    children: (
        <>
            <Radio
                checked
                id='radio-1'
                label='Radio 1'
                value='radio-1'
                {...props}
            />
            <Radio
                id='radio-2'
                label='Radio 2'
                value='radio-2'
                {...props}
            />
            <Radio
                id='radio-3'
                label='Radio 3'
                value='radio-3'
                {...props}
            />
        </>
    ),
}

export const Horizontal = {
    args: {
        ...defaultProps,
    },
}

export const Vertical = {
    args: {
        ...defaultProps,
        variant: 'vertical',
    },
}

export const WithoutLabel = {
    args: {
        ...defaultProps,
        label: '',
    },
}