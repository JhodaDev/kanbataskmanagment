import { createPortal } from 'react-dom'
import { useModal } from '../../hooks/useModal'

export const Modal = ({ children, id }) => {
  const { handleOutsideClick } = useModal()

  return (
    <>
      {createPortal(
        <div className="modal" onClick={handleOutsideClick} id={id}>
          {children}
        </div>,
        document.getElementById('modal-root')
      )}
    </>
  )
}
