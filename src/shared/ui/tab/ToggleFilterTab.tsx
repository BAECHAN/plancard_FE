import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/shared/lib/shadcn-ui/components/ui';

import { Option, Size } from '@/shared/type';

interface ToggleFilterTabProps {
  option: Option<string>[];
  onClick: () => void;

  size?: Size;
  disabled?: boolean;
}

const ToggleFilterTab = ({
  option,
  onClick,

  disabled = false,
  size = 'medium',
  ...props
}: ToggleFilterTabProps) => {
  const sizeClass: Record<Size, string> = {
    small: 'w-16 h-6 text-base',
    medium: 'w-20 h-7 text-lg',
    large: 'w-24 h-8 text-xl',
  };

  const activeClass =
    'data-[state=active]:bg-primary data-[state=active]:text-white rounded-md';

  return (
    <Tabs
      defaultValue={option[0].value}
      onClick={onClick}
      {...props}
    >
      <TabsList className="bg-lightgray w-auto h-auto ">
        {option.map(opt => (
          <TabsTrigger
            key={opt.value}
            className={`${activeClass} ${sizeClass[size]}`}
            value={opt.value}
          >
            {opt.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default ToggleFilterTab;
