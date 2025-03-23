import { CardOrMyCard } from '@/shared/type';
import { Card, CardList } from '@/widgets/card/card-item/ui';

interface ListContainerCardProps {
  cardList: CardOrMyCard[];

  showCheckbox?: boolean;
  checkCardPick?: (cardId: string) => boolean;
  onCardPick?: (cardId: string) => void;
}

const ListContainerCard = ({
  cardList,
  showCheckbox = false,
  checkCardPick,
  onCardPick,
}: ListContainerCardProps) => {
  return (
    <CardList className="gap-6">
      {cardList.map((card, index) => (
        <Card
          key={index}
          info={card}
          showCheckbox={showCheckbox}
          isChecked={checkCardPick?.(card.cardId)}
          onCheck={() => onCardPick?.(card.cardId)}
        />
      ))}
    </CardList>
  );
};

export default ListContainerCard;
