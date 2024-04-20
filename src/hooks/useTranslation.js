import translation from '../translation/ptBR'

const t = (key, values) => {
    const allValuesKey = Object.keys(values ?? [])
    const baseString = translation[key]
    const hasHTMLComponent = baseString.includes('</b>' || '<br />' || '</strong>')

    if (!allValuesKey.length && !hasHTMLComponent) return baseString

    let text

    allValuesKey.forEach(element => {
        text = baseString.replace(`{{${element}}}`, values[element])
    })

    if (!hasHTMLComponent) return text

    return (
        <span dangerouslySetInnerHTML={{ __html: text }} />
    )
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