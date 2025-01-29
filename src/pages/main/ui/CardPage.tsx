import { useActiveTabStore } from '@/shared/store';
import {
  ContentContainer,
  ControlContainer,
  ControlContainerExplore,
  ControlContainerMy,
  ListContainerCard,
  MainContainer,
} from '@/widgets/layout/ui';

export const CardPage = () => {
  const { activeTab } = useActiveTabStore();

  return (
    <MainContainer>
      <ControlContainer>
        {activeTab === 'explore' ? (
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
