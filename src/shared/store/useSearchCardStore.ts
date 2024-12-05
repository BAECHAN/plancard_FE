import { SearchCardForm } from '@/shared/type';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SearchCardStoreState {
  searchCard: SearchCardForm;
  setSearchCard: (newSearchCard: SearchCardForm) => void;
  updateSort: (newSort: Partial<SearchCardForm['sort']>) => void;
  updateFilter: (newFilter: Partial<SearchCardForm['filter']>) => void;
  toggleScrapFilter: () => void;
  updateSearch: (newSearch: SearchCardForm['search']) => void;
  resetSearch: () => void;
}

const initialSearchCard: SearchCardForm = {
  sort: {
    sortBy: 'lastUpdateDate',
    sortOrder: 'desc',
  },
};

const useSearchCardStore = create(
  devtools<SearchCardStoreState>(
    set => ({
      searchCard: initialSearchCard,

      setSearchCard: newSearchCard =>
        set(state => ({
          searchCard: {
            ...state.searchCard,
            ...newSearchCard,
          },
        })),

      updateSort: newSort =>
        set(state => ({
          searchCard: {
            ...state.searchCard,
            sort: {
              ...state.searchCard.sort,
              ...newSort,
            },
          },
        })),

      updateFilter: newFilter =>
        set(state => ({
          searchCard: {
            ...state.searchCard,
            filter: {
              ...state.searchCard.filter,
              ...newFilter,
              scrap:
                newFilter?.scrap ?? state.searchCard.filter?.scrap ?? false, // scrap이 없으면 기본값 false
            },
          },
        })),

      toggleScrapFilter: () => {
        set(state => ({
          searchCard: {
            ...state.searchCard,
            filter: {
              ...state.searchCard.filter,
              scrap: !state.searchCard.filter?.scrap,
            },
          },
        }));
      },

      updateSearch: newSearch =>
        set(state => ({
          searchCard: {
            ...state.searchCard,
            search: newSearch,
          },
        })),

      resetSearch: () => set({ searchCard: initialSearchCard }),
    }),
    { name: 'SearchCardStore' },
  ),
);

export default useSearchCardStore;
