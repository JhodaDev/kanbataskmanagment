import { useState, useEffect, useRef } from 'react'

export const Toggle = () => {
  const [theme, setTheme] = useState(() => {
    const themeActive = window.localStorage.getItem('theme')
    return themeActive || 'light'
  })
  const refToggleBall = useRef(null)

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')

    if (theme === 'light') {
      refToggleBall.current.style.transform = 'translate(140%, -50%)'
    } else {
      refToggleBall.current.style.transform = 'translate(0%,-50%)'
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.className = theme
  }, [theme])

  return (
    <div className="toggle" onClick={toggleTheme}>
      <i className="icon-icon-light-theme"></i>
      <div className="toggle__switch">
        <div className="toggle__switch__ball" ref={refToggleBall}></div>
      </div>
      <i className="icon-icon-dark-theme"></i>
    </div>
  )
}
