import './App.css';

import axios from 'axios'

import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Cards from './components/Cards'

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

function App() {

  const initialDateValue = {
    date: ""
  }

  const [form, setForm] = useState(initialDateValue)

  useEffect(() => {
    axios
        .get(`${BASE_URL}${form}?access_key=${API_KEY}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}, [])

  // const formChange = (e) => {
  //   setForm(e.target.value);
  // }

  const formChange = evt => {
    const { name, value} = evt.target
    setForm({ 
      ...form,
      [name]: value
     })
  }

  return (
    <div className="App">
      <Header />
      <Form form={form} onChange={formChange}/>
      <Cards form={form} />
    </div>
  );
}

export default App;
