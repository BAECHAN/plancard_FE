import { useActiveTabStore } from '@/shared/store';
import { BaseButton } from '@/shared/ui';
import {
  ControlContainerExplore,
  ControlContainerMy,
  ListContainerPlan,
} from '@/widgets/layout/ui';
import { FaPlus } from 'react-icons/fa6';

export const PlanPage = () => {
  const { activeTab } = useActiveTabStore();

  return (
    <div
      className="flex flex-col gap-10"
      aria-label="main-area"
    >
      <div
        className="flex flex-col gap-2"
        aria-label="control-area"
      >
        {activeTab === 'explore' ? (
          <ControlContainerExplore />
        ) : (
          <ControlContainerMy />
        )}
      </div>

      <div
        className="flex flex-col gap-4"
        aria-label="contents-area"
      >
        <div
          className="flex flex-col gap-2"
          aria-label="action-area"
        >
          <div
            aria-label="button-area"
            className="flex justify-end"
          >
            <BaseButton
              onClick={() => {}}
              aria-label="new-plan-button"
            >
              <span>New Plan</span>
              <span>
                <FaPlus />
              </span>
            </BaseButton>
          </div>
        </div>

        <div aria-label="list-area">
          <ListContainerPlan />
        </div>
      </div>
    </div>
  );
};
