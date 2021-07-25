import './Form.css';

import React from 'react';

const Form = ({ form, onChange }) => {

    return (
        <div>
            <form id="date">
                <input id="date" type="date" onChange={onChange} value={form.value} />
            </form>
            { form ? <p>Results:</p> : <p>Please enter a date</p>}
            { form ? <p>Some data will be diaplayed here soon.</p> : ''}
        </div>
    )
}

export default Form
