// import { Board } from './components/Boards/Board.jsx'
import { useEffect } from 'react'
import { EmptyBoard } from './components/Boards/EmptyBoard.jsx'
import { LeftBar } from './components/LeftBar/LeftBar'
import { EditBoard } from './components/Modals/EditBoard/EditBoard.jsx'
import { TopBar } from './components/TopBar/TopBar'
import useStore from './store/store.js'

function App () {
  const { modal, board } = useStore((state) => state)

  useEffect(() => {
    const dataBoard = JSON.parse(localStorage.getItem('boards'))
    const isEqual = JSON.stringify(dataBoard) === JSON.stringify(board.data)
    if (!isEqual) {
      if (dataBoard && dataBoard.length >= 1) {
        const { name, ...restObject } = dataBoard.find((item) => item.name === dataBoard[0].name)
        const dataActive = { id: name, data: restObject.columns }
        board.setBoard(dataBoard, dataActive)
      }
    }
    // if (dataBoard.length >= 0) board.setActive(dataBoard[0].name)
  }, [board.data])

  return (
    <>
      <div className="grid">
        <LeftBar />
        <div className="panel">
          <TopBar />
          <div className="panel__content">
            <EmptyBoard />
          </div>
        </div>
      </div>
      {modal.active === 'edit-board' && <EditBoard />}
    </>
  )
}

export default App
