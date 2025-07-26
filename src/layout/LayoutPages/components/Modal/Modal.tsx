import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import { memo, type ReactNode } from 'react';
import { IoMdClose } from 'react-icons/io';

interface Props {
  open: boolean;
  closeModal: () => void;
  children: ReactNode;
  titulo: string;
}

const Modal = ({ open, closeModal, children, titulo }: Props) => {
  if (!open) return;
  return createPortal(
    <>
      <div className={style.backdrop}></div>
      <div className={style.modalContainer}>
        <div className={style.titulo}>
          <h4>{titulo}</h4>
          <div onClick={closeModal} className={style.close}>
            <IoMdClose size={20} />
          </div>
        </div>
        <div className={style.children}>{children}</div>
      </div>
    </>,
    document.body
  );
};

export default memo(Modal);
