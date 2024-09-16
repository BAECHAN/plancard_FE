import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import './index.css';

interface BaseButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const BaseButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: BaseButtonProps) => {
  // 추가적인 스타일 설정
  const buttonStyle = backgroundColor ? { backgroundColor } : {};
  const sizeClass =
    size === 'small'
      ? 'px-2 py-1'
      : size === 'large'
        ? 'px-6 py-3'
        : 'px-4 py-2';
  const primaryClass = primary
    ? 'bg-blue-500 text-white'
    : 'bg-gray-500 text-white';

  return (
    <Button
      className={`${sizeClass} ${primaryClass}`}
      style={buttonStyle}
      {...props}
    >
      {label}
    </Button>
  );
};
