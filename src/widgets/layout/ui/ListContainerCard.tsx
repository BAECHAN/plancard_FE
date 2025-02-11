import { CARD_DETAIL, useModalStore } from '@/shared/store';
import { CardOrMyCard } from '@/shared/type';
import { Card, CardList } from '@/widgets/card/ui';

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
  const { openModal } = useModalStore();
  const handleCardClick = (clickedCardId: string) => {
    openModal({
      type: CARD_DETAIL,
      data: cardList.find(item => item.cardId === clickedCardId),
    });
  };

  return (
    <CardList className="gap-6">
      {cardList.map((card, index) => (
        <Card
          key={index}
          onClick={() => handleCardClick(card.cardId)}
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
