import { Modal } from '../Modal'
import { FormEditBoard } from './FormEditBoard'

export const EditBoard = () => {
  return (
    <Modal id="edit-board">
      <div className="modal__content">
        <div className="modal__header">
          <h3 className="modal__title mb-2">Add New Board</h3>
        </div>
        <div className="modal__body">
          <FormEditBoard />
        </div>
      </div>
    </Modal>
  )
}
