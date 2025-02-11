import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type PickViewMode =
  | 'MY_CARD_PICK'
  | 'EXPLORE_CARD_PICK'
  | 'MY_DAY_PICK'
  | 'EXPLORE_DAY_PICK'
  | 'PLAN_DETAIL';

export type CommonPickViewInPlanPage = {
  viewMode: PickViewMode | null;
  selectedDayIndex: number | null;
};

interface PickViewStoreState {
  pickView: CommonPickViewInPlanPage;
  updatePickView: (newPickView: Partial<CommonPickViewInPlanPage>) => void;

  pickCardList: string[];

  addPickCardList: (cardId: string) => void;
  removePickCardList: (cardId: string) => void;
  setPickCardList: (cardList: string[]) => void;

  pickDay: string | null;
  updatePickDay: (newPickDay: string | null) => void;

  resetPickViewAllData: () => void;
}

const initialPickView: CommonPickViewInPlanPage = {
  viewMode: null,
  selectedDayIndex: null,
};

const initialPickCardList: string[] = [];

const initialPickDay: string | null = null;
const usePickViewStore = create(
  devtools<PickViewStoreState>(
    set => ({
      pickView: initialPickView,
      pickCardList: initialPickCardList,
      pickDay: initialPickDay,

      updatePickView: newPickView =>
        set(state => ({
          ...state,
          pickView: {
            ...state.pickView,
            ...newPickView,
          } as CommonPickViewInPlanPage,
        })),

      setPickCardList: (cardList: string[]) =>
        set(state => ({
          ...state,
          pickCardList: cardList,
        })),

      addPickCardList: addedCardId =>
        set(state => ({
          ...state,
          pickCardList: [...state.pickCardList, addedCardId],
        })),
      removePickCardList: removedCardId =>
        set(state => ({
          ...state,
          pickCardList: state.pickCardList.filter(
            pickedCardId => pickedCardId !== removedCardId,
          ),
        })),
      updatePickDay: newPickDay =>
        set(state => ({
          ...state,
          pickDay: newPickDay,
        })),
      resetPickViewAllData: () =>
        set({
          pickView: initialPickView,
          pickCardList: initialPickCardList,
          pickDay: initialPickDay,
        }),
    }),
    { name: 'PickViewStore' },
  ),
);

export default usePickViewStore;
