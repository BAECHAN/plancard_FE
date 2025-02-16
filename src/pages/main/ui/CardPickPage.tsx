import { PickedCardsContainer } from '@/pages/pick/ui';
import { CARD_LIST } from '@/shared/const';
import { usePickViewStore } from '@/shared/store';
import { BaseAlert, BaseButton } from '@/shared/ui';
import {
  ContentContainer,
  ControlContainer,
  ControlContainerExplore,
  ControlContainerMy,
  ListContainerCard,
  MainContainer,
} from '@/widgets/layout/ui';
import { PiWarningCircleFill } from 'react-icons/pi';

export const CardPickPage = () => {
  const {
    pickView,
    updatePickView,
    pickCardList,
    addPickCardList,
    removePickCardList,
  } = usePickViewStore();

  const cardList = CARD_LIST;

  const handleCardPickCompleteClick = () => {
    updatePickView({
      viewMode: 'PLAN_DETAIL',
    });
  };

  const checkCardPick = (cardId: string) => {
    return pickCardList.some(pickedCardId => pickedCardId === cardId);
  };

  const handleCardPick = (cardId: string) => {
    if (checkCardPick(cardId)) {
      removePickCardList(cardId);
    } else {
      addPickCardList(cardId);
    }
  };

  return (
    <>
      <BaseAlert
        variant="cream"
        size="medium"
      >
        <PiWarningCircleFill className="text-2xl" />
        <span>[ 플랜 ]에서 넘어온 [ 카드 선택 ] 화면입니다.</span>
        <BaseButton
          onClick={handleCardPickCompleteClick}
          variant="primary"
          size="small"
        >
          카드 선택 완료
        </BaseButton>
      </BaseAlert>
      <PickedCardsContainer />
      <MainContainer
        label="card-pick-page"
        className="gap-10"
      >
        <ControlContainer label="card-pick-page-control">
          {pickView.viewMode === 'EXPLORE_CARD_PICK' ? (
            <ControlContainerExplore contentPage="cards" />
          ) : (
            <ControlContainerMy contentPage="cards" />
          )}
        </ControlContainer>
        <ContentContainer label="card-pick-page-content">
          <ListContainerCard
            cardList={cardList}
            showCheckbox
            checkCardPick={checkCardPick}
            onCardPick={handleCardPick}
          />
        </ContentContainer>
      </MainContainer>
    </>
  );
};
