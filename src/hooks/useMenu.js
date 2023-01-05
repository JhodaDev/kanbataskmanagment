import { useEffect, useState } from 'react'

export const useMenu = (refLeftBar, refBtnFloat) => {
  const [showBar, setShowBar] = useState(null)

  const toggleBar = () => {
    showBar === null ? setShowBar(false) : setShowBar(!showBar)
  }

  const toggleBarFloat = () => {
    showBar === null ? setShowBar(false) : setShowBar(!showBar)
    refLeftBar.current.classList.toggle('leftbar--hide')
    refBtnFloat.current.classList.toggle('btn-float--hide')
  }

  useEffect(() => {
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

  return [toggleBar, toggleBarFloat]
}
