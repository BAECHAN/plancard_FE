import { useToggle } from '@/shared/hooks';
import { MyCard } from '@/shared/type';
import { BaseTextarea, IconButton } from '@/shared/ui';
import { useRef } from 'react';
import { HiOutlinePencilSquare, HiPencilSquare } from 'react-icons/hi2';

const ModalContainerCardDetailInfoMyMemo = ({
  myMemo,
}: {
  myMemo: MyCard['myMemo'];
}) => {
  const { value: isEditMode, toggle } = useToggle(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleMyMemoToggle = () => {
    toggle();
  };

  return (
    <div
      aria-label="card-detail-info-my-memo"
      className="flex h-full flex-grow flex-col gap-3 overflow-y-hidden"
    >
      <div
        aria-label="card-detail-title"
        className="flex gap-2 font-bold"
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
            className="flex h-full flex-grow"
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
