type UppercaseLetter =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';

export type CountryCode = `${UppercaseLetter}${UppercaseLetter}`;

export type Size = 'small' | 'medium' | 'large';
export type SizeWithXSmall = Size | 'xSmall';
export type SizeWithXLarge = Size | 'xLarge';

export type Variant =
  | 'primary'
  | 'gray'
  | 'skyblue'
  | 'amber'
  | 'navy'
  | 'cream'
  | 'periwinkle'
  | 'white';

type DateToString = 'yyyy-MM-dd';
type PlanVisibility = 'public' | 'private'; // private 은 mine에만, public은 explore에 노출됨 - 여기서 선택된 타입은 DailyPlan에도 일괄 적용됨

export type SortOrder = 'asc' | 'desc';
export type AddOrRemove = 'add' | 'remove';

export type Option<ValueT> = {
  value: ValueT;
  label: string;
};

interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
  pagination?: PaginationResponse;

  details?: string; // 에러 발생 시 추가
}

interface PaginationResponse extends PaginationRequest {
  totalPages: number;
  totalItems: number;
}

interface PaginationRequest {
  page: number;
  size: number;
}

export type Card = {
  cardId: string; // 부모 key와 연결해야함
  title: string;
  description: string;
  country: Country['title'];
  city: City['title'];
  theme: Theme['title'][];
  category: Category['title'];
  rating: 1 | 2 | 3 | 4 | 5; // 1 ~ 5
  googleMapLink: string;
  imageList: CardImage[];
  scrap: boolean;
};

export interface MyCard extends Card {
  getDate: Date;
  lastUpdateDate: Date;
  myImageList: CardImage[];
  myMemo: string;
  myTagList: CardTag[];
}

export type CardOrMyCard = Card | MyCard;

type SearchBaseForm = {
  sort: SearchSortBase;
};

interface SearchRegionForm extends SearchBaseForm {
  filter?: SearchFilterBase;
}

export type SearchFilterBase = {
  country?: Country['isoCode'];
  city?: City['cityId'];
  theme?: Theme['themeId'][];
  category?: Category['categoryId'][];
};

export type SearchToggleFilterCard = {
  scrap: boolean;
};

export type SearchToggleFilterPlan = SearchToggleFilterCard & {
  like: boolean;
  day: boolean;
};

export type SearchFilterCard = SearchFilterBase & SearchToggleFilterCard;

export type SearchFilterPlan = SearchFilterBase & SearchToggleFilterPlan;

// 검색 폼 타입 업데이트
export type SearchCardForm = {
  sort: SearchSortCard;
  search?: string;
  filter?: SearchFilterCard;
};

export type SearchPlanForm = {
  sort: SearchSortPlan;
  search?: string;
  filter?: SearchFilterPlan;
};

type SearchSortBase = {
  sortBy: string;
  sortOrder: SortOrder;
};

export type SearchSortCard = SearchSortBase & {
  sortBy: 'cardTitle' | 'cityTitle' | 'rating' | 'lastUpdateDate' | 'getDate';
};

export type SearchSortPlan = SearchSortBase & {
  sortBy: 'planName' | 'createdDate' | 'lastUpdateDate' | 'likeCount';
};

export type Plan = {
  planId: string;
  visibility: PlanVisibility;

  title: string;

  likeCount: number;
  scrap: boolean;
  like: boolean;

  author: string; // my plan은 이게 내꺼인거만

  createdDate: Date;
  lastUpdateDate: Date;

  startDate: DateToString; // 여행 시작 일자
  endDate: DateToString; // 여행 끝 일자
  duration: number; // 여행 끝 일자 - 여행 시작 일자 + 1
  tagList: CardTag[]; // country, city, theme, category 태그
};

interface MyPlan extends Plan {
  thumnailCardList: ThumnailCardForPlan[];
}

// ThumnailCardForPlan을 Card에서 필요한 필드만 Pick해서 정의
export interface ThumnailCardForPlan
  extends Pick<
    Card,
    | 'cardId'
    | 'title'
    | 'description'
    | 'country'
    | 'city'
    | 'category'
    | 'rating'
    | 'scrap'
  > {
  imageUrl: string; // imageUrl은 별도로 추가
}

interface PlanWithDay {
  planId: string;
  dayList: Day[];
}

export type Day = {
  dayId: string;
  planId: string;
  dayNumber: number; // 1부터 시작
  date: DateToString;
  visibility: PlanVisibility;

  title: string;
  author: string;

  likeCount: number;
  scrap: boolean;
  like: boolean;

  tagList: CardTag[]; // country, city, theme, category 태그
  cardList: Card[];
  bridgeList: Bridge[];
};

export interface PlanWithMemo {
  planId: Plan['planId'];
  memo: string;
}

interface Bridge {
  bridgeId: string;
  memo: string;
}

interface User {
  email: string;
  nickname: string;
}

interface RegionBase {
  title: string; // 국가 혹은 도시 이름
  description: string;
  imageUrl: string; // 대표 이미지
}

export interface Country extends RegionBase {
  isoCode: CountryCode; // ISO 3166-1 alpha-2 코드 (예: "US", "KR")
}

export interface City extends RegionBase {
  cityId: string;
  countryIsoCode: Country['isoCode']; // ISO 국가 코드 (Country와 연결)
}

type Category = {
  categoryId: string;
  title:
    | '관광지'
    | 'attraction'
    | 'restaurant'
    | 'cafe'
    | 'mart'
    | 'transportation'
    | 'lodging'
    | 'others'; // 관광지, 음식점, 카페, 마트, 교통수단, 숙소, 기타
};

type Theme = {
  themeId: string;
  title: string; // 해변, 도시, 고대, 산
};

type CardTag = {
  tagId: string;
  tagName: string;
};

export interface CardImage {
  imageId: string;
  imageUrl: string;
  alt: string;
  isMain: boolean;
}

export type DateRange = {
  from: Date | null;
  to: Date | null;
};
