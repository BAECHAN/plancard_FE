import { MyCard } from '@/shared/type';

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
        className="font-bold"
      >
        My Memo
      </div>
      <pre
        aria-label="card-detail-content"
        className="whitespace-normal"
      >
        {myMemo}
      </pre>
    </div>
  );
};

export default ModalContainerCardDetailInfoMyMemo;
