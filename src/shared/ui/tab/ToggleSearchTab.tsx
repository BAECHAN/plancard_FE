import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/shared/lib/shadcn-ui/components/ui';
import { Option, Size } from '@/shared/type';
import { MouseEvent, useState } from 'react';

interface ToggleSearchTabProps {
  size?: Size;
  disabled?: boolean;
}

const optionList: Option[] = [
  { label: 'Mine', value: 'my' },
  { label: 'Explore', value: 'explore' },
];

const ToggleSearchTab = ({
  disabled = false,
  size = 'medium',
  ...props
}: ToggleSearchTabProps) => {
  const sizeClass: Record<Size, string> = {
    small: 'h-7 text-xl',
    medium: 'h-9 text-2xl',
    large: 'h-11 text-3xl',
  };

  const activeClass =
    'data-[state=active]:border-none data-[state=active]:rounded-none data-[state=active]:shadow-[inset_0_-1px_0_0,0_4px_0_0] data-[state=active]:shadow-current data-[state=active]:text-primary pb-4';

  const [activeTab, setActiveTab] = useState(optionList[0].value);
  const handleTabClick = (
    e: MouseEvent<HTMLButtonElement>,
    clickedTabValue: Option['value'],
  ) => {
    setActiveTab(clickedTabValue);
  };

  return (
    <Tabs
      defaultValue={optionList[0].value}
      value={activeTab}
    >
      <TabsList className="relative bg-white w-full h-auto">
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
