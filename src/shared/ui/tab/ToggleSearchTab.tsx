import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/shared/lib/shadcn-ui/components/ui';
import { MyOrExplore, usePathStore } from '@/shared/store';
import { Option, Size } from '@/shared/type';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

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

  const { currentPage, currentTab } = usePathStore();

  const optionList: Option<MyOrExplore>[] = useMemo(
    () => [
      { label: `My ${currentPage === 'cards' ? 'Card' : 'Plan'}`, value: 'my' },
      { label: 'Explore', value: 'explore' },
    ],
    [currentPage],
  );

  return (
    <Tabs
      defaultValue={optionList[0].value}
      value={currentTab}
    >
      <TabsList className="relative h-auto w-full bg-white">
        {optionList.map(option => (
          <Link
            key={option.value}
            to={`/${currentPage}/${option.value}`}
            className="w-[50%]"
          >
            <TabsTrigger
              value={option.value}
              className={`w-full ${sizeClass[size]} ${activeClass}`}
            >
              {option.label}
            </TabsTrigger>
          </Link>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default ToggleSearchTab;
