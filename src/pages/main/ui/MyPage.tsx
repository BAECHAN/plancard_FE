import { BaseButton } from '@/shared/ui';
import { BaseModal } from '@/widgets/modal/ui';
import { useState } from 'react';

export const MyPage = () => {
  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>My Page</h1>
      <p>This is My Page.</p>

      <BaseButton onClick={openModal}>Open Modal</BaseButton>

      <BaseModal
        isOpen={open}
        onRequestClose={closeModal}
      >
        <div>Modal Content</div>
      </BaseModal>
    </div>
  );
};
