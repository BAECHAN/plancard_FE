import { Card, Day } from '@/shared/type';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type PickViewMode = 'CARD_PICK' | 'DAY_PICK' | 'PLAN';

export type CommonPickViewInPlanPage = {
  viewMode: PickViewMode;
  selectedDayIndex: number | null;
};

export type PickViewInPlanPage =
  | ({
      pickCardList: Card[];
    } & CommonPickViewInPlanPage)
  | ({
      pickDay: Day | null;
    } & CommonPickViewInPlanPage)
  | ({
      pickDay?: Day | null;
      pickCardList?: Card[];
    } & CommonPickViewInPlanPage);

interface PickViewStoreState {
  pickView: PickViewInPlanPage;
  updatePickView: (newPickView: Partial<PickViewInPlanPage>) => void;
  resetPickView: () => void;
}

const initialPickView: PickViewInPlanPage = {
  viewMode: 'PLAN',
  selectedDayIndex: null,
};

const usePickViewStore = create(
  devtools<PickViewStoreState>(
    set => ({
      pickView: initialPickView,
      updatePickView: newPickView =>
        set(state => ({
          ...state,
          pickView: {
            ...state.pickView,
            ...newPickView,
          } as PickViewInPlanPage,
        })),
      resetPickView: () => set({ pickView: initialPickView }),
    }),
    { name: 'PickViewStore' },
  ),
);

export default usePickViewStore;
