import Modal from './Modal';
import { useState } from 'react';

export function TaskForm({ handleSubmit, inputValue, handleInputChange, handleKeyDown, editingIndex, cancelTask }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal}>Crear nueva tarea</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            type="text"
            value={inputValue}
            placeholder="Escribe una tarea..."
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button>{editingIndex !== null ? 'Update' : 'Save'}</button>
          {editingIndex !== null && <button onClick={cancelTask}>Cancel</button>}
        </form>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </>
  )
}
