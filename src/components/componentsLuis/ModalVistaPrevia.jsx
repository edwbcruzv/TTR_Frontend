// Modal.js
import React, { useState } from 'react';
import '../../../public/styles/modal.css'; // Puedes agregar estilos en un archivo CSS separado

const Modal = ({ showModal, closeModal, children }) => {
  return (
    <>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
