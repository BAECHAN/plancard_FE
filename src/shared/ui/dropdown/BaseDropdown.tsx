import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/shared/lib/shadcn-ui/components/ui';

interface BaseDropdownProps {
  triggerNode: React.ReactNode;
  contentNode: React.ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
  align?: 'start' | 'center' | 'end';
}

const BaseDropdown = ({
  triggerNode,
  contentNode,
  side = 'bottom',
  align = 'start',
  ...props
}: BaseDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{triggerNode}</DropdownMenuTrigger>
      <DropdownMenuContent
        className={`flex flex-col items-center`}
        side={side}
        align={align}
      >
        {contentNode}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BaseDropdown;
