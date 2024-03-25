import PropTypes from 'prop-types'
import Radio from '../../atoms/Radio'
import RadioGroup from '../../atoms/RadioGroup'
import Skeleton from '../../atoms/Skeleton'
import './ProductAttributesPickers.styles.css'

const LoadingState = () => (
    <section className='product-attributes-pickers-container'>
        <Skeleton height='48px' styles={{ marginBottom: '12px' }} />
        <Skeleton height='32px' styles={{ marginBottom: '24px' }} />
        {[1, 2, 3].map((item) => {
            return (
                <div key={item} className='product-picker-skeleton-container'>
                    <Skeleton height='24px' />
                    <div className='product-picker-skeleton'>
                        <Skeleton height='32px' />
                        <Skeleton height='32px' />
                        <Skeleton height='32px' />
                    </div>
                </div>
            )
        })}
    </section>
)

const ProductAttributesPickers = ({ checkedPickers, isLoading, onChange, pickers, productName }) => (
    <>
        {isLoading ? <LoadingState /> : (
            <section className='product-attributes-pickers-container'>
                <h2>Produto:</h2>
                <h3 className='section-title'>{productName}</h3>
                {pickers.map(({ picker_id, picker_name, products }) => {
                    const checkedOptionOnPicker = checkedPickers.find(({ category }) => category === picker_name)
                    const pickerGroupValue = checkedOptionOnPicker?.value
                    const pickerGroupTitle = pickerGroupValue ? (<p>{picker_name}: <b>{pickerGroupValue}</b></p>) : picker_name

                    return (
                        <RadioGroup key={picker_id} label={pickerGroupTitle}>
                            {products.map(({ picker_label, product_id }) => {
                                const isChecked = pickerGroupValue === picker_label

                                return (
                                    <Radio
                                        checked={isChecked}
                                        group={picker_id}
                                        id={product_id}
                                        key={product_id}
                                        label={picker_label}
                                        onChange={() => onChange({ category: picker_name, value: picker_label })}
                                        value={product_id}
                                    />
                                )
                            })}
                        </RadioGroup>
                    )
                })}
            </section>
        )}
    </>
)

ProductAttributesPickers.propTypes = {
    checkedPickers: PropTypes.arrayOf(PropTypes.shape({
        category: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    })),
    isLoading: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    pickers: PropTypes.arrayOf(PropTypes.shape({
        picker_id: PropTypes.string.isRequired,
        picker_name: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(PropTypes.shape({
            picker_label: PropTypes.string.isRequired,
            product_id: PropTypes.string.isRequired,
        })).isRequired,
    })),
    productName: PropTypes.string,
}

ProductAttributesPickers.defautProps = {
    checkedPickers: [],
    isLoading: false,
    pickers: [],
    productName: '',
}

export default ProductAttributesPickers