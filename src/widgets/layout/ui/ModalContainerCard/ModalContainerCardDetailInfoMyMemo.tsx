import { useToggle } from '@/shared/hooks';
import { MyCard } from '@/shared/type';
import { BaseTextarea, IconButton } from '@/shared/ui';
import { useEffect, useRef } from 'react';
import { HiOutlinePencilSquare, HiPencilSquare } from 'react-icons/hi2';

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
      className="flex flex-col gap-3 flex-grow h-full overflow-y-hidden"
    >
      <div
        aria-label="card-detail-title"
        className="font-bold flex gap-2"
      >
        <span>My Memo</span>
        <IconButton
          size="small"
          IconComponent={isEditMode ? HiOutlinePencilSquare : HiPencilSquare}
          alt="연필 아이콘"
          onClick={handleMyMemoToggle}
        />
      </div>
      <div
        aria-label="card-detail-content"
        className="h-full overflow-y-auto"
      >
        {isEditMode ? (
          <div
            aria-label="card-detail-content-edit"
            className="h-full flex flex-grow"
          >
            <BaseTextarea
              ref={textareaRef}
              onEscape={handleMyMemoToggle}
              value={myMemo}
            />
          </div>
        ) : (
          <div
            aria-label="card-detail-content-view"
            className="whitespace-pre-wrap"
          >
            {myMemo}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalContainerCardDetailInfoMyMemo;
