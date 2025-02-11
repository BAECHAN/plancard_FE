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
    <MainContainer>
      <ControlContainer>
        {currentTab === 'explore' ? (
          <ControlContainerExplore />
        ) : (
          <ControlContainerMy />
        )}
      </ControlContainer>
      <ContentContainer>
        <ListContainerCard cardList={cardList} />
      </ContentContainer>
    </MainContainer>
  );
};
