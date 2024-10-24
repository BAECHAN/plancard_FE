import {
  cardLarge as large,
  cardMedium as medium,
  cardSmall as small,
  flexCenter,
} from '@/shared/const';
import { Size, Variant } from '@/shared/type';
import { BaseButton } from '@/shared/ui';

interface SelectCardProps {
  children: React.ReactNode;
  onClick: () => void;

  variant?: Variant;
  size?: Size;
  disabled?: boolean;
}

const SelectCard = ({
  onClick,
  size = 'medium',
  variant = 'primary',
}: SelectCardProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

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

export default SelectCard;
