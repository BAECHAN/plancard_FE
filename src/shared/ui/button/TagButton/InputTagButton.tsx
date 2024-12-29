import { useToggle } from '@/shared/hooks';
import TagButton, {
  TagButtonProps,
} from '@/shared/ui/button/TagButton/TagButton';
import PlusIcon from '@/shared/ui/icon/PlusIcon';
import { useState } from 'react';

const InputTagButton = ({
  onToggle,

  defaultValue = '',
  size = 'medium',
  ...props
}: Omit<TagButtonProps, 'onClick' | 'children'> & {
  onToggle: (newValue: string) => void;

  defaultValue?: string; // internalValue 초기값
}) => {
  const [actualValue, setActualValue] = useState('');
  const { value: isOpen, openToggle, closeToggle } = useToggle(false);

  /**
   * 태그 버튼을 여는 함수
   */
  const handleTagButtonEditOpen = () => {
    openToggle();
  };

  /**
   * 태그 버튼을 닫는 함수
   */
  const handleTagButtonEditClose = () => {
    setActualValue(''); // 입력 필드 초기화
    closeToggle();
    onToggle(actualValue);
  };

  /**
   * 엔터 또는 이스케이프 키를 눌렀을 때 태그 버튼을 닫는 함수
   * @param e
   */
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.key === 'Enter' || e.key === 'Escape') {
      handleTagButtonEditClose();
    }
  };

  return (
    <>
      {isOpen ? (
        <TagButton
          {...props}
          onClick={() => {}}
          size={size}
          variant={'white'}
        >
          <input
            type="text"
            value={actualValue}
            onChange={e => setActualValue(e.target.value)}
            onBlur={handleTagButtonEditClose}
            onKeyDown={handleInputKeyDown}
            autoFocus
          />
        </TagButton>
      ) : (
        <TagButton
          {...props}
          onClick={handleTagButtonEditOpen}
          size={size}
          variant={'white'}
        >
          {defaultValue}
          <PlusIcon size={size} />
        </TagButton>
      )}
    </>
  );
};

export default InputTagButton;
