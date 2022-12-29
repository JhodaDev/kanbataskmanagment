import React, { useState } from 'react'
import { useForm } from '../../../hooks/useForm'

export const FormEditBoard = () => {
  const [columns, setColumns] = useState([{ value: '' }])
  const { onHandleChange, form } = useForm({ boardName: '' })

  const addColumn = () => setColumns([...columns, { value: '' }])

  const handleChange = (e, index) => {
    const { value } = e.target
    const list = [...columns]
    list[index].value = value
    setColumns(list)
    onHandleChange(e)
  }

  const removeColumn = (index) => {
    const list = [...columns]
    const newColumns = list.filter((_, i) => i !== index)
    setColumns(newColumns)
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="boardName">Name</label>
        <input
          type="text"
          name="boardName"
          placeholder="e.g. Web Design"
          onChange={onHandleChange}
          value={form.boardName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="columns">Columns</label>
        {columns?.map((column, index) => (
          <div className="input-column" key={index}>
            <input
              type="text"
              value={column.value}
              onChange={(e) => handleChange(e, index)}
              name={`column-${index}`}
            />
            {columns.length > 1 && (
              <button onClick={() => removeColumn(index)} type="button">
                <i className="icon-icon-cross"></i>
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="btn-secondary w-full"
        onClick={addColumn}
      >
        +Add New Column
      </button>
      <button type="button" className="btn-primary w-full mt-1">
        Create New Board
      </button>
    </form>
  )
}
