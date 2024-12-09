import {
  buttonLarge as large,
  buttonMedium as medium,
  buttonSmall as small,
} from '@/shared/const';
import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import { Size } from '@/shared/type';
const ESCButton = ({
  onClick,
  size = 'medium',
}: {
  onClick: () => void;
  size?: Size;
}) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  return (
    <Button
      className={`${sizeClass[size]} bg-mono200 rounded-lg p-2 h-[3vh] hover:bg-mono300`}
      onClick={onClick}
      aria-label={'ESC Button'}
    >
      <span>ESC</span>
    </Button>
  );
};

export default ESCButton;
