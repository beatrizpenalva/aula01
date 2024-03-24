import PropTypes from 'prop-types'
import Radio from '../../atoms/Radio'
import RadioGroup from '../../atoms/RadioGroup'

const ProductAttributesPickers = ({ checkedPickers, onChange, pickers }) => (
    <div>
        {pickers.map(({ picker_id, picker_name, products }) => {
            return (
                <RadioGroup key={picker_id} label={picker_name}>
                    {products.map(({ picker_label, product_id }) => {
                        const isChecked = checkedPickers.find(({ category }) => category === picker_name)?.value === picker_label

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
    </div>
)

ProductAttributesPickers.propTypes = {
    checkedPickers: PropTypes.arrayOf(PropTypes.shape({
        category: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    })),
    onChange: PropTypes.func.isRequired,
    pickers: PropTypes.arrayOf(PropTypes.shape({
        picker_id: PropTypes.string.isRequired,
        picker_name: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(PropTypes.shape({
            picker_label: PropTypes.string.isRequired,
            product_id: PropTypes.string.isRequired,
        })).isRequired,
    })).isRequired,
}

ProductAttributesPickers.defautProps = {
    checkedPickers: [],
}

export default ProductAttributesPickers