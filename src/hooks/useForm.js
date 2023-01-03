import { useState } from 'react'

export const useForm = (config) => {
  const [form, setForm] = useState(config.initialState)

  return {
    handleFormChange: (e) => {
      const { name, value } = e.target
      setForm({ ...form, [name]: value })
    },
    resetForm: () => setForm(config.initialState),
    handleSubmit: config.handleSubmit
  }
  // const [form, setForm] = useState(initialState)

  // const handleFormChange = (e) => {
  //   const { name, value } = e.target
  //   setForm({ ...form, [name]: value })
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  // const resetForm = () => {
  //   setForm(initialState)
  // }

  // return { form, handleFormChange, resetForm }
}
