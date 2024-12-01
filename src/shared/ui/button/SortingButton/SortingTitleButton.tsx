import {
  flexCenter,
  titleLarge as large,
  titleMedium as medium,
  titleSmall as small,
} from '@/shared/const';
import useControlledToggle from '@/shared/hooks/useControlledToggle';
import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import { Size } from '@/shared/type';
import { TbPointFilled } from 'react-icons/tb';

interface SortingTitleButtonProps {
  title: string;

  onClick?: (newValue: boolean) => void;
  value?: boolean;
  defaultValue?: boolean; // internalValue 초기값
  size?: Size;
}
const SortingTitleButton = ({
  title,

  onClick,
  value,
  defaultValue = false,
  size = 'medium',
  ...props
}: SortingTitleButtonProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  const { actualValue, handleToggle } = useControlledToggle({
    value,
    defaultValue,
    onChange: onClick,
  });

  return (
    <Button
      className={`${flexCenter} ${sizeClass[size]} mx-2 ${actualValue ? 'text-black' : 'text-mono400 hover:underline'} cursor-pointer p-0`}
      onClick={handleToggle}
      {...props}
    >
      <span className="mt-[2px]">
        <TbPointFilled />
      </span>
      {title}
    </Button>
  );
};

export default SortingTitleButton;
