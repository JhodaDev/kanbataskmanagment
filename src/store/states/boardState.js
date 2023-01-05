export const board = (set, get) => {
  return {
    boards: [],
    active: {
      id: '',
      data: []
    },
    newBoard: (data) => {
      const board = get().board
      board.boards.push(data)
      const active = board.boards[board.boards.length - 1]
      set((state) => ({
        board: {
          ...state.board,
          boards: board.boards,
          active: {
            id: active.name,
            data: active.columns
          }
        }
      }))
    },
    setBoard: (boards, active) => {
      const newState = {}
      if (boards) newState.boards = boards
      if (active) newState.active = active

      set((state) => ({
        board: {
          ...state.board,
          ...newState
        }
      }))
    },
    setActive: (id) => {
      set((state) => ({
        board: {
          ...state.board,
          active: id
        }
      }))
    }
  }
}
