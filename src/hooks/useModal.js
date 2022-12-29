import { useEffect, useState } from 'react'

export const useModal = (isShow, idModal) => {
  const [show, setShow] = useState(isShow)

  const toggle = () => setShow(!show)

  const handleClick = (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('modal--show')
      setShow(false)
    }
  }

  useEffect(() => {
    if (show) {
      const modal = document.querySelector(`#${idModal}`)
      modal.classList.add('modal--show')
    }
  }, [show])

  return [show, toggle, handleClick]
}
