import { useEffect, useState } from 'react'

export const useLocalStorage = (key, val) => {
  const [itemStorage, setItemStorage] = useState(() => {
    // si no existe el item en el localStorage, se crea
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(val))
      return val
    } else {
      const prevData = JSON.parse(localStorage.getItem(key))
      return prevData
    }
  })

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === key) setItemStorage(e.newValue)
    }

    window.addEventListener('storage', handleStorage)
    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(itemStorage))
  }, [itemStorage])

  return [itemStorage, setItemStorage]
}
