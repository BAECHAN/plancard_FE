import { ContentPage } from '@/shared/type';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ContentPageState {
  pageType: ContentPage;
  setPageType: (type: ContentPage) => void;
}

const initialPageType: ContentPage = 'cards';

const useContentPageStore = create(
  devtools<ContentPageState>(
    set => ({
      pageType: initialPageType,
      setPageType: newPageType => set({ pageType: newPageType }),
    }),
    { name: 'ContentPageStore' },
  ),
);

export default useContentPageStore;
