import { useEffect, useRef, useState } from 'react'
import { Logo } from '../UI/Logo'
import { Option } from './Option'
import { Toggle } from './Toggle'

export const LeftBar = () => {
  const [showBar, setShowBar] = useState(null)
  const refLeftBar = useRef(null)
  const refBtnFloat = useRef(null)

  const toggleBar = () => {
    showBar === null ? setShowBar(false) : setShowBar(!showBar)
  }

  const toggleBarFloat = () => {
    showBar === null ? setShowBar(false) : setShowBar(!showBar)
    refLeftBar.current.classList.toggle('leftbar--hide')
    refBtnFloat.current.classList.toggle('btn-float--hide')
  }

  useEffect(() => {
    // si es la primera vez que se ejecuta este efecto no se ejecuta nada
    if (showBar === null) return
    const grid = document.querySelector('.grid')
    if (showBar) {
      refLeftBar.current.classList.remove('leftbar--hide')
      grid.classList.remove('grid--expand')
      grid.classList.add('grid--reduce')
      refLeftBar.current.classList.add('leftbar--show')
      refBtnFloat.current.classList.add('btn-float--hide')
      refBtnFloat.current.classList.remove('btn-float--show')
    } else {
      refLeftBar.current.classList.add('leftbar--hide')
      refLeftBar.current.classList.remove('leftbar--show')
      refBtnFloat.current.classList.remove('btn-float--hide')
      grid.classList.add('grid--expand')
      grid.classList.remove('grid--reduce')
      refBtnFloat.current.classList.add('btn-float--show')
    }
  }, [showBar])

  return (
    <>
      <aside className="leftbar" ref={refLeftBar}>
        <Logo />
        <div className="mt-3 leftbar__content">
          <div className="leftbar__top">
            <h3>ALL BOARDS (3)</h3>

            <nav className="mt-1">
              <Option value="Platform Launch" active />
              <Option value="Marketing Plan" />
              <Option value="Roadmap" />
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
