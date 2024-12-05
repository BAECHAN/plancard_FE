import { useActiveTabStore } from '@/shared/store';
import {
  ControlContainerExplore,
  ControlContainerMy,
  ListContainerCard,
} from '@/widgets/layout/ui';

export const CardPage = () => {
  const { activeTab } = useActiveTabStore();

  return (
    <div className="">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-2">
          {activeTab === 'explore' ? (
            <ControlContainerExplore />
          ) : (
            <ControlContainerMy />
          )}
        </div>
        <ListContainerCard />
      </div>
    </div>
  );
};
