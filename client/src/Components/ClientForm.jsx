export default function ClientForm({ formData, handleFormSubmit, handleChange }) {

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Nom</label>
      <input
        type='text'
        required
        name='first_name'
        value={formData.first_name}
        onChange={handleChange}
      />
      <label>Prénom</label>
      <input
        type='text'
        required
        name='last_name'
        value={formData.last_name}
        onChange={handleChange}
      />
      <label>Date d'anniversaire</label>
      <input
        type='date'
        required
        name='birth_date'
        value={formData.birth_date}
        onChange={handleChange}
      />
      <button type='submit'>Me créer un compte</button>
    </form>
  )
}
