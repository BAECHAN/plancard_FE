import { CardOrMyCard } from '@/shared/type';
import Card from '@/widgets/card/ui/Card';
import { useEffect, useRef, useState } from 'react';

const leftPositions = [
  'left-0',
  'left-10',
  'left-20',
  // ... 필요한 만큼 추가
];

const CardStack = ({
  cardListInPlan,
  onClick,
}: {
  cardListInPlan: CardOrMyCard[];
  onClick: () => void;
}) => {
  const handleCardStackClick = () => {
    onClick();
  };

  // 마지막 카드의 left 위치 + 카드 width를 계산하여 전체 컨테이너 width 설정
  const childrenCardRef = useRef<HTMLDivElement>(null);

  const [cardStackWidth, setCardStackWidth] = useState(0);
  const [cardStackHeight, setCardStackHeight] = useState(0);

  useEffect(() => {
    if (childrenCardRef.current) {
      setCardStackWidth(childrenCardRef.current.offsetWidth + 80);
      setCardStackHeight(childrenCardRef.current.offsetHeight + 40);
    }
  }, [childrenCardRef.current]);

  return (
    <div
      className={`relative flex cursor-pointer`}
      style={{ width: `${cardStackWidth}px`, height: `${cardStackHeight}px` }}
      aria-label="카드뭉치"
      onClick={handleCardStackClick}
    >
      {cardListInPlan.map((card, index) => (
        <div
          key={card.cardId}
          className={`absolute top-0 ${leftPositions[index]} z-${
            cardListInPlan.length - index
          }`}
        >
          <Card
            ref={childrenCardRef}
            size="medium"
            info={card}
          />
        </div>
      ))}
    </div>
  );
};

export default CardStack;
