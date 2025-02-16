import { useModalStore } from '@/shared/store';
import { PlanWithMemo } from '@/shared/type';
import { BaseTextarea } from '@/shared/ui';

const ModalContainerPlanMemoDetail = ({ planId, memo }: PlanWithMemo) => {
  const { closeModal } = useModalStore();

  return (
    <div
      aria-label="plan-memo-detail-container"
      className="flex h-full w-full flex-grow"
    >
      <div className="flex h-full w-full flex-grow text-3xl">
        <BaseTextarea
          value={memo}
          onEscape={closeModal}
          placeholder="메모 입력"
          hasBorder={false}
          textSize="large"
          showMaxLength
          maxLength={2000}
        />
      </div>
    </div>
  );
};

export default ModalContainerPlanMemoDetail;
