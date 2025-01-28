import { useActiveTabStore } from '@/shared/store';
import {
  ControlContainerExplore,
  ControlContainerMy,
  ListContainerCard,
} from '@/widgets/layout/ui';

export const CardPage = () => {
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
      <div aria-label="list-area">
        <ListContainerCard />
      </div>
    </div>
  );
};
