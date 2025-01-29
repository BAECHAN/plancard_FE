import { CARD_DETAIL, PLAN_MEMO_DETAIL, useModalStore } from '@/shared/store';
import { BaseButton } from '@/shared/ui';
import {
  ModalContainerCardDetail,
  ModalContainerPlanMemoDetail,
} from '@/widgets/layout/ui';
import { BaseModal } from '@/widgets/modal/ui';

const ModalContainer = () => {
  const { modalType, modalData } = useModalStore();

  return (
    <>
      {modalType === CARD_DETAIL && (
        <BaseModal
          width="70vw"
          height="80vh"
        >
          {modalData && <ModalContainerCardDetail cardData={modalData} />}
        </BaseModal>
      )}
      {modalType === PLAN_MEMO_DETAIL && (
        <BaseModal
          width="70vw"
          height="80vh"
          footer={
            <>
              <BaseButton variant="amber">Delete</BaseButton>
              <BaseButton>Save</BaseButton>
            </>
          }
        >
          {modalData && (
            <ModalContainerPlanMemoDetail
              planId={modalData.planId}
              memo={modalData.memo}
            />
          )}
        </BaseModal>
      )}
    </>
  );
};

export default ModalContainer;
