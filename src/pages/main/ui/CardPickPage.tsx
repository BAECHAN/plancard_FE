import { MyOrExplore, usePickViewStore } from '@/shared/store';
import { BaseAlert, BaseButton } from '@/shared/ui';
import {
  ContentContainer,
  ControlContainer,
  ControlContainerExplore,
  ControlContainerMy,
  ListContainerCard,
  MainContainer,
} from '@/widgets/layout/ui';
import { useState } from 'react';
import { PiWarningCircleFill } from 'react-icons/pi';

export const CardPickPage = () => {
  const [type, setType] = useState<MyOrExplore>('my');

  const { updatePickView } = usePickViewStore();

  const handleCardPickCompleteClick = () => {
    updatePickView({
      viewMode: 'PLAN',
    });
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
      <MainContainer>
        <ControlContainer>
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
    </>
  );
};
