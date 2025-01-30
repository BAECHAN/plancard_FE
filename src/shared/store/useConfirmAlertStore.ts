import { create } from 'zustand';

interface ConfirmAlertStore {
  isConfirmAlertOpen: boolean;
  setIsConfirmAlertOpen: (isOpen: boolean) => void;
}

const useConfirmAlertStore = create<ConfirmAlertStore>(set => ({
  isConfirmAlertOpen: false,
  setIsConfirmAlertOpen: isOpen => set({ isConfirmAlertOpen: isOpen }),
}));

export default useConfirmAlertStore;
