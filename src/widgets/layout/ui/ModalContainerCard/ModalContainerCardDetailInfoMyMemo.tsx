import { useToggle } from '@/shared/hooks';
import { MyCard } from '@/shared/type';
import { BaseTextarea, IconButton } from '@/shared/ui';
import { useEffect, useRef } from 'react';
import { HiPencilSquare } from 'react-icons/hi2';

const ModalContainerCardDetailInfoMyMemo = ({
  myMemo,
}: {
  myMemo: MyCard['myMemo'];
}) => {
  const { value: isEditMode, toggle } = useToggle(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(
    function focusTextareaOnEditMode() {
      if (isEditMode) {
        textareaRef.current?.focus();
      }
    },
    [isEditMode],
  );

  const handleMyMemoToggle = () => {
    toggle();
  };

  return (
    <div
      aria-label="card-detail-info-my-memo"
      className="flex flex-col gap-3 overflow-y-auto"
    >
      <div
        aria-label="card-detail-title"
        className="font-bold flex gap-2"
      >
        My Memo
        <IconButton
          size="small"
          IconComponent={HiPencilSquare}
          alt="연필 아이콘"
          onClick={handleMyMemoToggle}
        />
      </div>
      {isEditMode ? (
        <div>
          <BaseTextarea
            ref={textareaRef}
            onEscape={handleMyMemoToggle}
            value={myMemo}
          />
        </div>
      ) : (
        <div
          aria-label="card-detail-content"
          className="whitespace-pre-wrap"
        >
          {myMemo}
        </div>
      )}
    </div>
  );
};

export default ModalContainerCardDetailInfoMyMemo;
