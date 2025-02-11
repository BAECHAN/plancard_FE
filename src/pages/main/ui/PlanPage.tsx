import { usePathStore } from '@/shared/store';
import { BaseButton } from '@/shared/ui';
import {
  Block,
  ContentContainer,
  ControlContainer,
  ControlContainerExplore,
  ControlContainerMy,
  GroupInBlock,
  ListContainerPlan,
  MainContainer,
} from '@/widgets/layout/ui';
import { FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export const PlanPage = () => {
  const { currentTab } = usePathStore();
  const navigate = useNavigate();

  const handleNewPlan = () => {
    navigate('/plans/my/edit');
  };

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
        <Block
          label="action"
          className="justify-end"
        >
          <GroupInBlock
            label="button"
            className="justify-end"
          >
            <BaseButton
              onClick={handleNewPlan}
              aria-label="새 플랜 만들기"
            >
              <span>New Plan</span>
              <FaPlus className="h-4 w-4" />
            </BaseButton>
          </GroupInBlock>
        </Block>

        <Block label="list">
          <ListContainerPlan />
        </Block>
      </ContentContainer>
    </MainContainer>
  );
};
