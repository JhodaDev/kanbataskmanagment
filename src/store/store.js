import create from 'zustand'
import { modal } from './states/modalState'
import { devtools } from 'zustand/middleware'

const useStore = create(devtools((set, get) => ({
  modal: modal(set, get)
})))

export default useStore
