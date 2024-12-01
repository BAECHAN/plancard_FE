export const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`;

export const TOGGLE_FILTER_TAB_OPTION = [
  [
    {
      label: 'Plan',
      value: 'plan',
    },
    {
      label: 'Day',
      value: 'day',
    },
  ],
  [
    {
      label: '전체',
      value: 'all',
    },
    {
      label: '스크랩',
      value: 'scrap',
    },
  ],
  [
    {
      label: '전체',
      value: 'all',
    },
    {
      label: '좋아요',
      value: 'like',
    },
  ],
];
