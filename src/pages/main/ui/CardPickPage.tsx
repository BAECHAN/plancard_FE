import { MyOrExplore, usePickViewStore } from '@/shared/store';
import { BaseButton } from '@/shared/ui';
import {
  ContentContainer,
  ControlContainer,
  ControlContainerExplore,
  ControlContainerMy,
  ListContainerCard,
  MainContainer,
} from '@/widgets/layout/ui';
import { useState } from 'react';

export const CardPickPage = () => {
  const [type, setType] = useState<MyOrExplore>('my');

  const { updatePickView } = usePickViewStore();

  const handleCardPickCompleteClick = () => {
    updatePickView({
      viewMode: 'PLAN',
    });
  };

  return (
    <MainContainer>
      <ControlContainer>
        <BaseButton onClick={handleCardPickCompleteClick}>
          카드 선택 완료
        </BaseButton>
        {type === 'explore' ? (
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
