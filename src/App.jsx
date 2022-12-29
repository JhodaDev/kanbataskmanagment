// import { Board } from './components/Boards/Board.jsx'
import { EmptyBoard } from './components/Boards/EmptyBoard.jsx'
import { LeftBar } from './components/LeftBar/LeftBar'
import { TopBar } from './components/TopBar/TopBar'
import { ModalContext } from './context/ModalContext.js'
import { useModal } from './hooks/useModal.js'
import { EditBoard } from './components/Modals/EditBoard/EditBoard'

function App () {
  const [show, toggle, handleClick] = useModal(false, 'edit-board')

  return (
    <>
      <div className="grid">
        <LeftBar />
        <div className="panel">
          <TopBar />
          <div className="panel__content">
            <ModalContext.Provider
              value={{
                show,
                toggle,
                handleClick
              }}
            >
              <EmptyBoard />
              {/* <Board /> */}
              {show && <EditBoard />}
            </ModalContext.Provider>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
