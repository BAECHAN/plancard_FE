import { MyCard } from '@/shared/type';
import { IconButton } from '@/shared/ui';
import { HiPencilSquare } from 'react-icons/hi2';

const ModalContainerCardDetailInfoMyMemo = ({
  myMemo,
}: {
  myMemo: MyCard['myMemo'];
}) => {
  return (
    <div
      aria-label="card-detail-info-my-memo"
      className="flex flex-col gap-3"
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
        />
      </div>
      <pre
        aria-label="card-detail-content"
        className="whitespace-pre-wrap"
      >
        {myMemo}
      </pre>
    </div>
  );
};

export default ModalContainerCardDetailInfoMyMemo;
