import { useState } from 'react';

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const abrirModal = () => {
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
  };

  return { abrirModal, fecharModal, modalOpen };
};

export default useModal;
