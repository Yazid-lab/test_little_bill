import React, { useState } from 'react'
import axios from 'axios'
export default function ClientForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    birth_date: ''
  })
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios.post('http://127.0.0.1:8000/api/client', formData)
    setFormData({
      first_name: '',
      last_name: '',
      birth_date: ''
    })
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label>Nom</label>
      <input type='text' required name="first_name" value={formData.first_name} onChange={handleChange} />
      <label>Prénom</label>
      <input type='text' required name='last_name' value={formData.last_name} onChange={handleChange} />
      <label>Date d'anniversaire</label>
      <input type='date' required name='birth_date' value={formData.birth_date} onChange={handleChange} />
      <button type='submit'>Me créer un compte</button>
    </form>
  )
}
