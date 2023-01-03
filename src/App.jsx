// import { Board } from './components/Boards/Board.jsx'
import { EmptyBoard } from './components/Boards/EmptyBoard.jsx'
import { LeftBar } from './components/LeftBar/LeftBar'
import { EditBoard } from './components/Modals/EditBoard/EditBoard.jsx'
import { TopBar } from './components/TopBar/TopBar'
import useStore from './store/store.js'

function App () {
  const activeModal = useStore((state) => state.modal.active)

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
      {activeModal === 'edit-board' && <EditBoard />}
    </>
  )
}

export default App
