import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { ModalContext } from '../../context/ModalContext'

export const Modal = ({ children, id }) => {
  // si le dan click afuera del modal, se cierra
  const { handleClick } = useContext(ModalContext)

  return (
    <>
      {createPortal(
        <div className="modal" onClick={handleClick} id={id}>
          {children}
        </div>,
        document.getElementById('modal-root')
      )}
    </>
  )
}
