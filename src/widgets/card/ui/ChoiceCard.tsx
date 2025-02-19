import {
  flexCenter,
  choiceCardLarge as large,
  choiceCardMedium as medium,
  choiceCardSmall as small,
} from '@/shared/const';
import { Size, Variant } from '@/shared/type';
import { BaseButton } from '@/shared/ui';

interface ChoiceCardProps {
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

  return (
    <div
      className={`border-2 border-dashed border-mono500 ${flexCenter} ${sizeClass[size]}`}
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
