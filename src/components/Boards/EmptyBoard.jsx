import { useModal } from '../../hooks/useModal'

export const EmptyBoard = () => {
  const { handleToggle } = useModal()

  return (
    <>
      <div className="panel__empty">
        <p>This board is empty. Create a new column to get started.</p>
        <button
          className="btn-primary"
          onClick={(e) => handleToggle(e, 'edit-board')}
        >
          + Add New Column
        </button>
      </div>
    </>
  )
}
