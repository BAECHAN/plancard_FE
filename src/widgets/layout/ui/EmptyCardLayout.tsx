import {
  cardLarge as large,
  cardMedium as medium,
  cardSmall as small,
  flexCenter,
} from '@/shared/const';
import { Size, Variant } from '@/shared/type';
import BaseButton from '@/shared/ui/Button/BaseButton';

interface EmptyCardLayoutProps {
  children: React.ReactNode;
  onClick: () => void;

  variant?: Variant;
  size?: Size;
  disabled?: boolean;
}

const EmptyCardLayout = ({
  onClick,
  size = 'medium',
  variant = 'primary',
}: EmptyCardLayoutProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  return (
    <div
      className={`border-dashed border-2 border-[#91929F] ${flexCenter} ${sizeClass[size]}`}
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

export default EmptyCardLayout;
