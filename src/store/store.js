import create from 'zustand'
import { modal } from './states/modalState'
import { devtools } from 'zustand/middleware'
import { board } from './states/BoardState'

const useStore = create(devtools((set, get) => ({
  modal: modal(set, get),
  board: board(set, get)
})))

export default useStore
