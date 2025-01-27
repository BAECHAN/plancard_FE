import { SearchPlanForm } from '@/shared/type';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SearchPlanStoreState {
  searchPlan: SearchPlanForm;
  setSearchPlan: (newSearchPlan: SearchPlanForm) => void;
  updateSort: (newSort: Partial<SearchPlanForm['sort']>) => void;
  updateFilter: (newFilter: Partial<SearchPlanForm['filter']>) => void;
  toggleScrapFilter: () => void;
  toggleLikeFilter: () => void;
  togglePlanOrDayFilter: () => void;
  updateSearch: (newSearch: SearchPlanForm['search']) => void;
  resetSearch: () => void;
}

const initialSearchPlan: SearchPlanForm = {
  search: '',
  filter: {
    day: false,
    like: false,
    scrap: false,
  },
  sort: {
    sortBy: 'lastUpdateDate',
    sortOrder: 'desc',
  },
};

const useSearchPlanStore = create(
  devtools<SearchPlanStoreState>(
    set => ({
      searchPlan: initialSearchPlan,

      setSearchPlan: newSearchPlan =>
        set(state => ({
          searchPlan: {
            ...state.searchPlan,
            ...newSearchPlan,
          },
        })),

      updateSort: newSort =>
        set(state => ({
          searchPlan: {
            ...state.searchPlan,
            sort: {
              ...state.searchPlan.sort,
              ...newSort,
            },
          },
        })),

      updateFilter: newFilter =>
        set(state => ({
          searchPlan: {
            ...state.searchPlan,
            filter: {
              ...state.searchPlan.filter,
              ...newFilter,
              scrap:
                newFilter?.scrap ?? state.searchPlan.filter?.scrap ?? false, // scrap이 없으면 기본값 false
              like: newFilter?.like ?? state.searchPlan.filter?.like ?? false, // like이 없으면 기본값 false
              day: newFilter?.day ?? state.searchPlan.filter?.day ?? false, // type이 없으면 기본값 day
            },
          },
        })),

      toggleScrapFilter: () => {
        set(state => ({
          searchPlan: {
            ...state.searchPlan,
            filter: {
              ...state.searchPlan.filter!,
              scrap: !state.searchPlan.filter?.scrap,
            },
          },
        }));
      },

      toggleLikeFilter: () => {
        set(state => ({
          searchPlan: {
            ...state.searchPlan,
            filter: {
              ...state.searchPlan.filter!,
              like: !state.searchPlan.filter?.like,
            },
          },
        }));
      },

      togglePlanOrDayFilter: () => {
        set(state => ({
          searchPlan: {
            ...state.searchPlan,
            filter: {
              ...state.searchPlan.filter!,
              day: !state.searchPlan.filter?.day,
            },
          },
        }));
      },

      updateSearch: newSearch =>
        set(state => ({
          searchPlan: {
            ...state.searchPlan,
            search: newSearch,
          },
        })),

      resetSearch: () => set({ searchPlan: initialSearchPlan }),
    }),
    { name: 'SearchPlanStore' },
  ),
);

export default useSearchPlanStore;
