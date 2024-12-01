import TagButton, {
  TagButtonProps,
} from '@/shared/ui/button/TagButton/TagButton';

import useControlledToggle from '@/shared/hooks/useControlledToggle';
import { PlusIcon, XMarkIcon } from '@/shared/ui';

const InteractiveTagButton = ({
  value,
  defaultValue = false,
  onToggle,
  children,
  size = 'medium',
  ...props
}: Omit<TagButtonProps, 'onClick'> & {
  value?: boolean;
  defaultValue?: boolean; // internalValue 초기값
  onToggle?: (newValue: boolean) => void;
}) => {
  const { actualValue, handleToggle } = useControlledToggle({
    value,
    defaultValue,
    onChange: onToggle,
  });

  return (
    <TagButton
      {...props}
      onClick={handleToggle}
      variant={actualValue ? 'primary' : 'white'}
    >
      <span>{children}</span>
      <span>
        {actualValue ? <XMarkIcon size={size} /> : <PlusIcon size={size} />}
      </span>
    </TagButton>
  );
};

export default InteractiveTagButton;
