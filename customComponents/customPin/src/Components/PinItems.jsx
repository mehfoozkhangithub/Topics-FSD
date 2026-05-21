import React from 'react'

export const PinItems = React.forwardRef(({ style, max, handleChange, handleBackSpace }, ref) => {

    const handleKeyUp = (e) => {
        // console.log('🚀 ~ e:', e);
        switch (e.keyCode) {
            case 8:
                if (e.target.value === "") {
                    handleBackSpace()``
                }
                break;

            default:
                handleChange(e.target.value);
        }
    }
    return (
        <>
            <input ref={ref} style={style} maxLength={max} onKeyUp={handleKeyUp} />
        </>
    )
});
