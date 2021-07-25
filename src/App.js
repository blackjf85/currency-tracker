import './App.css';

import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'

function App() {

  const [form, setForm] = useState('')

  const formChange = (e) => {
    setForm(e.target.value);
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <Header />
      <Form form={form} onChange={formChange}/>
    </div>
  );
}

export default App;
