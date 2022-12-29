import { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'

export const EmptyBoard = () => {
  const { toggle } = useContext(ModalContext)

  return (
    <>
      <div className="panel__empty">
        <p>This board is empty. Create a new column to get started.</p>
        <button className="btn-primary" onClick={toggle}>
          + Add New Column
        </button>
      </div>
    </>
  )
}
