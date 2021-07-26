import './Form.css';

import React from 'react';

const Form = ({ form, onChange }) => {

    return (
        <div>
            <form id="date">
                <input id="date" type="date" onChange={onChange} value={form.value} />
            </form>
        </div>
    )
}

export default Form
