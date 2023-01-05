import { useRef } from 'react'
import { useMenu } from '../../hooks/useMenu'
import useStore from '../../store/store'
import { Logo } from '../UI/Logo'
import { Option } from './Option'
import { Toggle } from './Toggle'

export const LeftBar = () => {
  const refLeftBar = useRef(null)
  const refBtnFloat = useRef(null)
  const [toggleBar, toggleBarFloat] = useMenu(refLeftBar, refBtnFloat)
  const boards = useStore((state) => state.board)
  return (
    <>
      <aside className="leftbar" ref={refLeftBar}>
        <Logo />
        <div className="mt-3 leftbar__content">
          <div className="leftbar__top">
            <h3>ALL BOARDS (3)</h3>

            <nav className="mt-1">
              {boards.boards?.map((board) => (
                <div key={board.id}>
                  <Option value={board.name} active={boards.active.id} />
                </div>
              ))}
              <Option value="+ Create New Board" action />
            </nav>
          </div>
          <div className="leftbar__bottom">
            <Toggle />
            <button className="mt-1 btn" onClick={toggleBar}>
              <i className="icon-icon-hide-sidebar"></i>
              Hide Sidebar
            </button>
          </div>
        </div>
      </aside>
      <button className="btn-float" ref={refBtnFloat} onClick={toggleBarFloat}>
        <i className="icon-icon-show-sidebar"></i>
      </button>
    </>
  )
}
