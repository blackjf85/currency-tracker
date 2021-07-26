import './Form.css';

import React from 'react';

const Form = ({ form, onChange }) => {

    return (
        <div>
            <form id="date">
                <input id="date" type="date" onChange={onChange} value={form.value} />
            </form>
            <h1>{form}</h1>
        </div>
    )
}

export default Form
