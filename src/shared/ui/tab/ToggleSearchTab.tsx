import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/shared/lib/shadcn-ui/components/ui';
import { useActiveTabStore, useContentPageStore } from '@/shared/store';
import { MyOrExplore, Option, Size } from '@/shared/type';
import { MouseEvent, useMemo } from 'react';

interface ToggleSearchTabProps {
  size?: Size;
  disabled?: boolean;
}

const ToggleSearchTab = ({
  disabled = false,
  size = 'medium',
}: ToggleSearchTabProps) => {
  const sizeClass: Record<Size, string> = {
    small: 'h-7 text-xl',
    medium: 'h-9 text-2xl',
    large: 'h-11 text-3xl',
  };

  const activeClass =
    'data-[state=active]:border-none data-[state=active]:rounded-none data-[state=active]:shadow-[inset_0_-1px_0_0,0_4px_0_0] data-[state=active]:shadow-current data-[state=active]:text-primary pb-4';

  const { activeTab, setActiveTab } = useActiveTabStore();
  const { pageType } = useContentPageStore();

  const optionList: Option<MyOrExplore>[] = useMemo(
    () => [
      { label: `My ${pageType === 'card' ? 'Card' : 'Plan'}`, value: 'my' },
      { label: 'Explore', value: 'explore' },
    ],
    [pageType],
  );

  const handleTabClick = (
    e: MouseEvent<HTMLButtonElement>,
    clickedTabValue: Option<MyOrExplore>['value'],
  ) => {
    setActiveTab(clickedTabValue);
  };

  return (
    <Tabs
      defaultValue={optionList[0].value}
      value={activeTab}
    >
      <TabsList className="relative h-auto w-full bg-white">
        {optionList.map(option => (
          <TabsTrigger
            key={option.value}
            value={option.value}
            onClick={e => handleTabClick(e, option.value)}
            className={`w-[50%] ${sizeClass[size]} ${activeClass}`}
          >
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default ToggleSearchTab;
