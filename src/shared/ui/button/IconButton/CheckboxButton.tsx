import { useControlledToggle } from '@/shared/hooks';
import { SizeWithXSmall } from '@/shared/type';
import { IconButton } from '@/shared/ui';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

interface CheckboxButtonProps {
  children: React.ReactNode;
  size?: SizeWithXSmall;

  onClick: (isChecked: boolean) => void;
  isControlled?: boolean;

  isChecked?: boolean;
  defaultIsChecked?: boolean; // internalValue 초기값
}

const CheckboxButton = ({
  size = 'small',
  children,
  isChecked,
  defaultIsChecked = false,
  onClick,
}: CheckboxButtonProps) => {
  const { actualValue, handleToggle } = useControlledToggle({
    value: isChecked,
    defaultValue: defaultIsChecked,
    onChange: onClick,
  });

  return (
    <div
      className="flex cursor-pointer items-center gap-2"
      onClick={handleToggle}
    >
      <IconButton
        IconComponent={actualValue ? ImCheckboxChecked : ImCheckboxUnchecked}
        alt="체크박스 버튼"
        size={size}
        color={actualValue ? '#28A745' : ''}
        stopPropagation={false}
      />
      {children}
    </div>
  );
};

export default CheckboxButton;
