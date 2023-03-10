import React from 'react'
import { FieldArray, FormikProvider, useFormik } from 'formik'
import * as yup from 'yup'
import useStore from '../../../store/store'
import { useLocalStorage } from '../../../hooks/useLocalStorage'
// import { useModal } from '../../../hooks/useModal'

const validationSchema = yup.object().shape({
  boardName: yup.string().required('Is required'),
  columns: yup.array().of(
    yup.object().shape({
      value: yup.string().required('Is required')
    })
  )
})

export const FormEditBoard = () => {
  const { board } = useStore((state) => state)
  const [boards, setBoards] = useLocalStorage('boards', [])
  // const { handleToggle } = useModal()

  const formik = useFormik({
    initialValues: {
      boardName: '',
      columns: [
        {
          name: 'column0',
          value: ''
        }
      ]
    },
    validateOnChange: false,
    validationSchema,
    onSubmit: (values) => {
      const newBoard = {
        id: Date.now(),
        name: values.boardName,
        columns: values.columns
      }
      setBoards([...boards, newBoard])
      board.newBoard(newBoard)
      // handleToggle('edit-board')
    }
  })

  const handleAddColumn = () => {
    const newColumn = {
      name: `column${formik.values.columns.length}`,
      value: ''
    }
    formik.setFieldValue('columns', [...formik.values.columns, newColumn])
  }

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="boardName">Name</label>
          <input
            type="text"
            name="boardName"
            placeholder="e.g. Web Design"
            value={formik.values.boardName}
            onChange={formik.handleChange}
            className={formik.errors.boardName ? 'input--error' : ''}
          />
          {formik.errors.boardName && (
            <p className="error">{formik.errors.boardName}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="columns">Columns</label>
          <FieldArray
            name="columns"
            render={(arrayHelpers) => (
              <>
                {formik.values.columns.map((column, index) => (
                  <div
                    className={`input-column ${
                      formik.values.columns.length > 1 ? 'input--column' : ''
                    }`}
                    key={index}
                  >
                    <input
                      type="text"
                      name={formik.values.columns[index].name}
                      placeholder="e.g. To Do"
                      value={formik.values.columns[index].value}
                      className={`${
                        formik.errors.columns &&
                        formik.errors.columns[index]?.value
                          ? 'input--error'
                          : ''
                      } `}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `columns[${index}].value`,
                          e.target.value
                        )
                      }
                    />
                    {formik.values.columns.length > 1 && (
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        <i className="icon-icon-cross"></i>
                      </button>
                    )}
                    {formik.errors.columns && (
                      <p className="error">
                        {formik.errors.columns[index]?.value}
                      </p>
                    )}
                  </div>
                ))}
              </>
            )}
          ></FieldArray>
        </div>
        <button
          type="button"
          className="btn-secondary w-full"
          onClick={handleAddColumn}
        >
          +Add New Column
        </button>
        <button type="submit" className="btn-primary w-full mt-1">
          Create New Board
        </button>
      </form>
    </FormikProvider>
  )
}
