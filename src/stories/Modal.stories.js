import React, { useState } from 'react'
import { Modal, Button } from '../components'

export default {
  title: 'Modal',
  component: Modal,
}

export const Component = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div>
      Click Me
      <Button onClick={() => setModalOpen(!modalOpen)}>Open Modal</Button>
      <Modal isOpen={modalOpen} handleCloseModal={handleCloseModal}>
        <Button onClick={handleCloseModal}>Close</Button>
        <div>Modal Content</div>
      </Modal>
      <div id="modal-portal" />
    </div>
  )
}
