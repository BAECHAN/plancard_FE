import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/shared/lib/shadcn-ui/components/ui';

import {
  searchTabLarge as large,
  searchTabMedium as medium,
  searchTabSmall as small,
} from '@/shared/const';
import { Option, Size } from '@/shared/type';

interface ToggleSearchTabProps {
  option: Option[];
  onClick: () => void;

  size?: Size;
  disabled?: boolean;
}

export const ToggleSearchTab = ({
  option,
  onClick,

  disabled = false,
  size = 'medium',
  ...props
}: ToggleSearchTabProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  const activeClass =
    'data-[state=active]:border-none  data-[state=active]:rounded-none data-[state=active]:shadow-[inset_0_-1px_0_0,0_4px_0_0] data-[state=active]:shadow-current data-[state=active]:text-primary';

  return (
    <Tabs
      defaultValue={option[0].value}
      onClick={onClick}
      {...props}
    >
      <TabsList className="bg-white w-[100vw] h-auto">
        <TabsTrigger
          className={`${activeClass} ${sizeClass[size]} w-[50%]`}
          value={option[0].value}
        >
          {option[0].label}
        </TabsTrigger>
        <TabsTrigger
          className={`${activeClass} ${sizeClass[size]}  w-[50%]`}
          value={option[1].value}
        >
          {option[1].label}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
