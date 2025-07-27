import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import { memo, type ReactNode } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';
import { useSlideUpModal } from '../../../../hooks/useSlideFadeIn';

interface Props {
  open: boolean;
  closeModal: () => void;
  children: ReactNode;
  titulo: string;
}

const Modal = ({ open, closeModal, children, titulo }: Props) => {
  const animation = useSlideUpModal();
  return createPortal(
    <AnimatePresence>
      {open && (
        <div>
          <div className={style.backdrop}></div>
          <motion.div {...animation} className={style.modalContainer}>
            <div className={style.titulo}>
              <h4>{titulo}</h4>
              <div onClick={closeModal} className={style.close}>
                <IoMdClose size={20} />
              </div>
            </div>
            <div className={style.children}>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default memo(Modal);
