import { createContext } from 'react'

export const ModalContext = createContext({
  show: false,
  toggle: () => {},
  handleClick: () => {}
})
