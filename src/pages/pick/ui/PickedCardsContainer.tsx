import { useToggle } from '@/shared/hooks';
import { IconButton } from '@/shared/ui';
import { Block } from '@/widgets/layout/ui';
import { CardSwiper } from '@/widgets/swiper/ui';

const PickedCardsContainer = () => {
  const { value: isOpen, toggle, closeToggle } = useToggle(false);

  return (
    <Block
      label="picked-cards-container"
      className="flex justify-end"
    >
      <IconButton
        iconPath="/icons/card.svg"
        alt="선택한 카드 보기"
        size="small"
        onClick={toggle}
      />

      {isOpen && (
        <CardSwiper
          size="large"
          onClose={closeToggle}
        />
      )}
    </Block>
  );
};

export default PickedCardsContainer;
