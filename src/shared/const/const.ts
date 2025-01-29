import { CountryCode, Option } from '@/shared/type';

export const LEAVE_CONFIRM_MESSAGE =
  '작성 중인 내용이 저장되지 않을 수 있습니다. 정말 나가시겠습니까?';

export const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`;

export const COUNTRY_MAP: Partial<Record<CountryCode, string>> = {
  KR: '대한민국',
  JP: '일본',
  CN: '중국',
  US: '미국',
  CA: '캐나다',
  FR: '프랑스',
  DE: '독일',
  GB: '영국',
  IT: '이탈리아',
  ES: '스페인',
  PT: '포르투갈',
  NL: '네덜란드',
  BE: '벨기에',
  LU: '룩셈부르크',
  AT: '오스트리아',
  CH: '스위스',
  SE: '스웨덴',
  NO: '노르웨이',
  FI: '핀란드',
  DK: '덴마크',
  IS: '아이슬란드',
  GR: '그리스',
};
export const MY_CARD_BUTTON_FILTER_THEME_OPTION: Option<string>[] = [
  {
    label: 'Sports',
    value: 'sports',
  },
  {
    label: 'Music',
    value: 'music',
  },
  {
    label: 'Food',
    value: 'food',
  },
  {
    label: 'Travel',
    value: 'travel',
  },
  {
    label: 'Art',
    value: 'art',
  },
];

export const PLAN_BUTTON_FILTER_THEME_OPTION: Option<string>[] = [
  {
    label: 'Beach',
    value: 'beach',
  },
  {
    label: 'Mountain',
    value: 'mountain',
  },
  {
    label: 'Arts and Culture',
    value: 'arts-and-culture',
  },
  {
    label: 'Delicious Food',
    value: 'delicious-food',
  },
  {
    label: 'Vacation',
    value: 'vacation',
  },
  {
    label: 'Night View',
    value: 'night-view',
  },
];

export const TOGGLE_FILTER_OPTION: Option<string>[][] = [
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
