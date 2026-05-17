import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import { PinItems } from './PinItems';

export const InputBox = ({ setMainVal, perBox, length, style }) => {

    const [values, setValues] = useState(new Array(length).fill(""))
    const elements = useRef(new Array(length).fill(0));

    const handleChange = (v, i) => {

        const vals = [...values];

        vals[i] = v;

        setValues(vals);

        if (i < vals.length) {
            elements.current[i + 1]?.focus();
            setMainVal(vals.join(""));
        }
    }


    const handleBackSpace = (i) => {
        console.log('🚀 ~ values:', values);

        const vals = [...values];

        vals[i] = "";

        setValues(vals);

        // if (i === 0) return
        if (i > 0) {
            elements.current[i - 1]?.focus();
        }


    }

    return (
        <>
            {
                values.map((items, index) => <PinItems
                    ref={(v) => elements.current[index] = v}
                    style={style} key={index} max={perBox} handleChange={(dataVal) => handleChange(dataVal, index)}
                    handleBackSpace={() => handleBackSpace(index)}
                />)
            }
        </>
    )
}


InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    perBox: PropTypes.number.isRequired

}

InputBox.defaultProps = {
    label: "hello",
    length: 3,
    perBox: 1
}