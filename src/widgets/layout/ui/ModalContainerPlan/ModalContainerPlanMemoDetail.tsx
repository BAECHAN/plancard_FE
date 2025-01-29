import { PlanWithMemo } from '@/shared/type';
import { BaseTextarea } from '@/shared/ui';

const ModalContainerPlanMemoDetail = ({ planId, memo }: PlanWithMemo) => {
  return (
    <div
      aria-label="plan-memo-detail-container"
      className="flex h-full w-full flex-grow"
    >
      <div className="flex h-full w-full flex-grow text-3xl">
        <BaseTextarea
          value={memo}
          placeholder="메모 입력"
          hasBorder={false}
          textSize="large"
        />
      </div>
    </div>
  );
};

export default ModalContainerPlanMemoDetail;
