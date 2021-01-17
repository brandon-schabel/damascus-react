import React, { useEffect, useRef, ReactNode } from 'react'

import { Portal } from './Portal'
import './modal.styl'

export interface ModalProps {
  children: ReactNode
  handleCloseModal: () => void
  isOpen: boolean
}

export const Modal = ({
  children,
  handleCloseModal = () => null,
  isOpen = false,
}: ModalProps) => {
  const modalContentRef = useRef(null)

  const handleClickOutside = (event: any) => {
    if (
      modalContentRef.current &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      !modalContentRef.current.contains(event.target)
    ) {
      handleCloseModal()
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <Portal isOpen={isOpen}>
      {isOpen && (
        <div className="dr-modal-background">
          <div className="dr-modal-positioner">
            <div className="dr-modal-content-container" ref={modalContentRef}>
              {/*<CloseButton />*/}
              {children}
            </div>
          </div>
        </div>
      )}
    </Portal>
  )
}
