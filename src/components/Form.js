import './Form.css';

import React, { useState } from 'react';

const Form = () => {

    const [form, setForm] = useState('')

    const onChange = (e) => {
      setForm(e.target.value);
    }

    return (
        <div>
            <form id="date">
                <input id="date" type="date" onChange={onChange} value={form.value} />
            </form>
            { form ? <p>Results:</p> : <p>Please enter a date</p>}
        </div>
    )
}

export default Form
