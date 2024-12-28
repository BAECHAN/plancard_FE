import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/shared/lib/shadcn-ui/components/ui';

import { Option, Size } from '@/shared/type';
import { useState } from 'react';

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

  const [activeTab, setActiveTab] = useState(option[0].value);

  const handleTabClick = (newValue: string) => {
    if (activeTab !== newValue) {
      onClick();
      setActiveTab(newValue);
    }
  };

  return (
    <Tabs
      value={activeTab}
      {...props}
    >
      <TabsList className="h-auto w-auto bg-lightgray">
        {option.map(opt => (
          <TabsTrigger
            key={opt.value}
            className={`${activeClass} ${sizeClass[size]}`}
            onClick={() => handleTabClick(opt.value)}
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
