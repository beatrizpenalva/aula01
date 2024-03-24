import './RadioImage.styles.css'

const RadioImage = ({ alt, checked, id, group, onChange, url, value }) => {

    return (
        <label htmlFor={id}>
            <img src={url} className={`product-image-sm${checked ? ' product-image-sm-checked' : ''}`} alt={alt} />
            <input type='radio' id={id} name={group} value={value} onChange={onChange} />
        </label>
    )
}

export default RadioImage