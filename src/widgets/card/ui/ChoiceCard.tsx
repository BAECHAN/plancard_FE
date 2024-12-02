import {
  flexCenter,
  cardLarge as large,
  cardMedium as medium,
  cardSmall as small,
} from '@/shared/const';
import { Size, Variant } from '@/shared/type';
import { BaseButton } from '@/shared/ui';

interface ChoiceCardProps {
  children: React.ReactNode;
  onClick: () => void;

  variant?: Variant;
  size?: Size;
  disabled?: boolean;
}

const ChoiceCard = ({
  onClick,
  size = 'medium',
  variant = 'primary',
}: ChoiceCardProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  // const heightSizeClass =
  //   size === 'small'
  //     ? 'h-[15rem]'
  //     : size === 'medium'
  //       ? 'h-[22rem]'
  //       : 'h-[30rem]';

  return (
    <div
      className={`border-dashed border-2 border-mono500 ${flexCenter} ${sizeClass[size]}`}
    >
      <BaseButton
        variant={variant}
        size={size}
        onClick={onClick}
      >
        카드 추가 선택
      </BaseButton>
    </div>
  );
};

export default ChoiceCard;
