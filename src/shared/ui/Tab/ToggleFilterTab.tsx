import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/shared/lib/shadcn-ui/components/ui';

import { Option, Size } from '@/shared/type';

const small = 'h-7 text-xs';
const medium = 'h-9 text-sm';
const large = 'h-11 text-base';

interface ToggleFilterTabProps {
  option: Option[];
  onClick: () => void;

  size?: Size;
  disabled?: boolean;
}

export const ToggleFilterTab = ({
  option,
  onClick,

  disabled = false,
  size = 'medium',
  ...props
}: ToggleFilterTabProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  const activeClass =
    'data-[state=active]:bg-skyblue data-[state=active]:text-white';

  return (
    <Tabs
      defaultValue={option[0].value}
      onClick={onClick}
      {...props}
    >
      <TabsList className="bg-lightgray w-auto h-auto">
        <TabsTrigger
          className={`${activeClass} ${sizeClass[size]}`}
          value={option[0].value}
        >
          {option[0].label}
        </TabsTrigger>
        <TabsTrigger
          className={`${activeClass} ${sizeClass[size]}`}
          value={option[1].value}
        >
          {option[1].label}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
