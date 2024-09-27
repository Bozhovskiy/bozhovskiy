import './Modal.css';
import React from 'react';
import icons from '../../../constants/icons.tsx';

interface ModalProps {
  bodyContent: React.JSX.Element;
  closeModal: () => void;
  title: React.ReactNode;
  modalStyle?: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({ bodyContent, closeModal, title, modalStyle }) => {
  return (
    <div className="blur__container">
      <div className="modal" style={{ ...modalStyle }}>
        <h1 className="modal__title">{title}</h1>
        <div onClick={closeModal}>{icons.closeModalSVG}</div>
        {bodyContent}
      </div>
    </div>
  );
};

export default Modal;
