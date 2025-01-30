import { create } from 'zustand';

export type CardOrPlan = 'cards' | 'plans';
export type MyOrExplore = 'my' | 'explore';

type PathState = {
  currentPage: CardOrPlan;
  currentTab: MyOrExplore;
  setPath: (pathname: string) => void;
};

const usePathStore = create<PathState>(set => ({
  currentPage: 'cards',
  currentTab: 'my',
  setPath: (pathname: string) => {
    const pathSegments = pathname.split('/');
    set({
      currentPage: pathSegments[1] as CardOrPlan,
      currentTab: pathSegments[2] as MyOrExplore,
    });
  },
}));

export default usePathStore;
