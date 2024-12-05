import { MyOrExplore } from '@/shared/type';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ActiveTabStoreState {
  activeTab: MyOrExplore;
  setActiveTab: (newActiveTab: MyOrExplore) => void;
}

const initialActiveTab: MyOrExplore = 'my';

const useActiveTabStore = create(
  devtools<ActiveTabStoreState>(
    set => ({
      activeTab: initialActiveTab,

      setActiveTab: newActiveTab =>
        set(state => ({
          activeTab: newActiveTab,
        })),
    }),
    { name: 'CommonStore' },
  ),
);

export default useActiveTabStore;
