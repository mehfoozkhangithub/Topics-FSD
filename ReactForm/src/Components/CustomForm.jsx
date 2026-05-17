import { useState } from 'react';
import PropTypes from 'prop-types';
/* 

{
email:"",
phone:"",
password:""
}

*/

export const CustomForm = ({ style, data, button, func }) => {
    const [formData, setFormData] = useState(() => {
        return data.reduce((acc, curr) => {
            acc[curr.name] = '';
            return acc;
        }, {});
    });

    const handleCahnge = (e) => {
        let { name, value } = e.target;

        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        func(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={style}>
            {data.forEach((items, index) => {
                return (
                    <div key={index}>
                        <label htmlFor={items.id}>{items.name}</label>
                        <input
                            id={items.id}
                            type={items.type}
                            placeholder={items.placeholder}
                            name={items.name}
                            onChange={(e) => handleCahnge(e)}
                        />
                    </div>
                );
            })}

            {/* <label htmlFor="email">email</label>
            <input id='email' type="email" />

            <label htmlFor="">pass</label>
            <input type="passwprd" />

            <label htmlFor="">phone</label>
            <input type="tel" />

            <label htmlFor="">add</label>
            <input type="textarea" />

             */}
            <button type="submit">{button}</button>
        </form>
    );
};

CustomForm.propTypes = {
    style: PropTypes.object.isRequired,
    button: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
