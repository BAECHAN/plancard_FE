import TagButton, {
  TagButtonProps,
} from '@/shared/ui/button/TagButton/TagButton';

import { AddOrRemove } from '@/shared/type';
import { PlusIcon, XMarkIcon } from '@/shared/ui';
import { useState } from 'react';

const InteractiveTagButton = (
  props: Omit<TagButtonProps, 'onClick' | 'variant'> & {
    onClick: (action: AddOrRemove) => void;
  },
) => {
  const { children, onClick, ...restProps } = props;

  const [canAdd, setCanAdd] = useState(true);

  const handleCanAddToggle = () => {
    setCanAdd(prev => !prev);
    canAdd ? onClick('remove') : onClick('add');
  };

  return (
    <TagButton
      {...restProps}
      variant={canAdd ? 'white' : 'primary'}
      onClick={() => handleCanAddToggle()}
    >
      <span>{children}</span>
      <span>
        {canAdd ? (
          <PlusIcon size={restProps.size} />
        ) : (
          <XMarkIcon size={restProps.size} />
        )}
      </span>
    </TagButton>
  );
};

export default InteractiveTagButton;
