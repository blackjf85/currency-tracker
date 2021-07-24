import './App.css';

import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'

function App() {

  const [form, setForm] = useState({
    username: ''
  })

  const submitHandler = (e) => {
    e.preventDefault();
  }

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="App">
      <Header />
      <Form onSubmit={submitHandler} onChange={changeHandler} form={form} />
    </div>
  );
}

export default App;
