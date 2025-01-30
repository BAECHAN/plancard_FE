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
        <ListContainerCard />
      </ContentContainer>
    </MainContainer>
  );
};
