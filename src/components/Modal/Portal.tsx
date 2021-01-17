import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export const Portal = ({ isOpen, children }: any) => {
  const mount = document.getElementById('modal-portal')
  const el = document.createElement('div')

  useEffect(() => {
    if (mount) {
      mount.appendChild(el)
    }
    return () => {
      if (mount) {
        mount.removeChild(el)
      }
    }
  }, [isOpen, el, mount])

  return createPortal(children, el)
}
