import translation from '../translation/ptBR'

const t = (key, values) => {
    const allValuesKey = Object.keys(values ?? [])
    const baseString = translation[key]

    if (!allValuesKey.length) return baseString

    let text

    allValuesKey.forEach(element => {
        text = baseString.replace(`{{${element}}}`, values[element])
    })

    return text
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const translate = (key, values) => {
        const isKeyCreated = Boolean(translation[key])

        if (isKeyCreated) return t(key, values)
        throw new Error(`Translate key ${key} it is not created at file ptBR`)
    }

    return { translate }
}