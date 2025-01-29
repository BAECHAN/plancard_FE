import { create } from 'zustand';

export const CARD_DETAIL = 'cardDetail';
export const PLAN_MEMO_DETAIL = 'planMemoDetail';

export type ModalType = typeof CARD_DETAIL | typeof PLAN_MEMO_DETAIL;

type ModalStore = {
  modalType: ModalType | null;
  modalData: any;

  isModalOpen: boolean;
  openModal: ({
    type,
    data,
  }: {
    type: ModalStore['modalType'];
    data: any;
  }) => void;
  closeModal: () => void;
};

const useModalStore = create<ModalStore>((set, get) => ({
  modalType: null,
  modalData: null,

  isModalOpen: false,
  openModal: ({ type, data }) => {
    const currentState = get();

    // ✅ 이미 같은 모달이 열려 있다면 다시 열 필요 없음
    if (currentState.isModalOpen && currentState.modalType === type) {
      return;
    }

    set({
      isModalOpen: true,
      modalType: type,
      modalData: data,
    });
  },
  closeModal: () =>
    set({ isModalOpen: false, modalType: null, modalData: null }),
}));

export default useModalStore;
