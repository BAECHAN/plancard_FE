import { useControlledToggle } from '@/shared/hooks';
import { PlusIcon, XMarkIcon } from '@/shared/ui';
import TagButton, {
  TagButtonProps,
} from '@/shared/ui/button/TagButton/TagButton';

const FilterTagButton = ({
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
      size={size}
      variant={actualValue ? 'primary' : 'white'}
    >
      {children}
      <span>
        {actualValue ? <XMarkIcon size={size} /> : <PlusIcon size={size} />}
      </span>
    </TagButton>
  );
};

export default FilterTagButton;
