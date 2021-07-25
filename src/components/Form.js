import './Form.css';

import React, { useState } from 'react';

const Form = () => {

    const [date, setDate] = useState('')

    const onChange = (e) => {
      setDate(e.target.value);
      console.log(e.target.value)
    }

    return (
        <div>
            <form>
                <input id="date" type="date" onChange={onChange} value={date.value} />
            </form>
            { date ? <h1>{date}</h1> : <h1>Please enter a date</h1>}
        </div>
    )
}

export default Form
