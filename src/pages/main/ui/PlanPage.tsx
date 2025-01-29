import { useActiveTabStore } from '@/shared/store';
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
import { Link } from 'react-router-dom';

export const PlanPage = () => {
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
        <Block
          label="action"
          className="justify-end"
        >
          <GroupInBlock
            label="button"
            className="justify-end"
          >
            <Link
              to="/plans/new"
              className="inline-flex"
            >
              <BaseButton
                aria-label="new-plan-button"
                onClick={() => {}}
              >
                <span>New Plan</span>
                <span>
                  <FaPlus />
                </span>
              </BaseButton>
            </Link>
          </GroupInBlock>
        </Block>

        <Block label="list">
          <ListContainerPlan />
        </Block>
      </ContentContainer>
    </MainContainer>
  );
};
