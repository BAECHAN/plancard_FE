import { CardOrMyCard, MyCard } from '@/shared/type';

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
}
