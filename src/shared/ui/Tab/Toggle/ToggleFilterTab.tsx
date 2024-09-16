import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/shared/lib/shadcn-ui/components/ui';

import {
  tabLarge as large,
  tabMedium as medium,
  tabSmall as small,
} from '@/shared/const';
import { Option, TabSize } from '@/shared/type';

interface ToggleFilterTabProps {
  option: Option[];
  onClick: () => void;

  size?: TabSize;
  disabled?: boolean;
}

export const ToggleFilterTab = ({
  option,
  onClick,

  disabled = false,
  size = 'medium',
  ...props
}: ToggleFilterTabProps) => {
  const sizeClass: Record<TabSize, string> = {
    small,
    medium,
    large,
  };

  return (
    <Tabs
      defaultValue={option[0].value}
      onClick={onClick}
      {...props}
    >
      <TabsList className="bg-lightgray w-auto h-auto">
        <TabsTrigger
          className={`data-[state=active]:bg-skyblue data-[state=active]:text-white ${sizeClass[size]}`}
          value={option[0].value}
        >
          {option[0].label}
        </TabsTrigger>
        <TabsTrigger
          className={`data-[state=active]:bg-skyblue data-[state=active]:text-white ${sizeClass[size]}`}
          value={option[1].value}
        >
          {option[1].label}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
