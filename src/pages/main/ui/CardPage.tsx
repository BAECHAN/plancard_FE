import { CARD_LIST } from '@/shared/const';
import { usePathStore } from '@/shared/store';
import {
  ContentContainer,
  ControlContainer,
  ControlContainerExplore,
  ControlContainerMy,
  ListContainerCard,
  MainContainer,
} from '@/widgets/layout/ui';

export const CardPage = () => {
  const { currentTab } = usePathStore();

  const cardList = CARD_LIST;

  return (
    <MainContainer
      label="card-page"
      className="gap-10"
    >
      <ControlContainer label="card-page-control">
        {currentTab === 'explore' ? (
          <ControlContainerExplore contentPage="cards" />
        ) : (
          <ControlContainerMy contentPage="cards" />
        )}
      </ControlContainer>
      <ContentContainer label="card-page-content">
        <ListContainerCard cardList={cardList} />
      </ContentContainer>
    </MainContainer>
  );
};
