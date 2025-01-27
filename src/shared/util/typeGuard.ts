import {
  CardOrMyCard,
  MyCard,
  SearchSortCard,
  SearchSortPlan,
} from '@/shared/type';

export class TypeGuard {
  static isMyCard(card: CardOrMyCard): card is MyCard {
    return (
      'myMemo' in card &&
      'myTagList' in card &&
      'getDate' in card &&
      'lastUpdateDate' in card &&
      'myImageList' in card
    );
  }

  static isSearchSortCard(
    value: SearchSortCard | SearchSortPlan,
  ): value is SearchSortCard {
    return (
      (value as SearchSortCard).sortBy !== undefined &&
      [
        'cardTitle',
        'cityTitle',
        'rating',
        'lastUpdateDate',
        'getDate',
      ].includes((value as SearchSortCard).sortBy)
    );
  }

  static isSearchSortPlan(
    value: SearchSortCard | SearchSortPlan,
  ): value is SearchSortPlan {
    return (
      (value as SearchSortPlan).sortBy !== undefined &&
      ['planName', 'createdDate', 'lastUpdateDate', 'likeCount'].includes(
        (value as SearchSortPlan).sortBy,
      )
    );
  }
}
