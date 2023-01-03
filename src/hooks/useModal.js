import { useEffect } from 'react'
import useStore from '../store/store'

export const useModal = () => {
  const modal = useStore((state) => state.modal)

  const handleToggle = (e, idModal) => modal.toggle(idModal)

  const handleOutsideClick = (e) => {
    if (e.target.id === modal.active) {
      modal.toggle()
    }
  }

  useEffect(() => {
    if (modal?.show) {
      const el = document.getElementById(modal.active)
      el?.classList.add('modal--show')
    }
  }, [modal.show])

  return { active: modal.show, handleToggle, handleOutsideClick }
}
