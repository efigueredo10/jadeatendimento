import { memo, type ReactNode } from "react";
import style from "./Dialog.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useFadeIn } from "../../../../hooks/useFadeIn";

interface Props {
  children: ReactNode;
  open: boolean;
}

const Dialog = ({ children, open }: Props) => {
  // Hooks
  const fade = useFadeIn(0.1);

  return createPortal(
    <AnimatePresence>
      {open && (
        <div>
          <div className={style.backdrop}></div>
          <motion.div {...fade} className={style.modalContainer}>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default memo(Dialog);
