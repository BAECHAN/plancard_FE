import { CARD_DETAIL, PLAN_MEMO_DETAIL, useModalStore } from '@/shared/store';
import { BaseButton, ConfirmAlert } from '@/shared/ui';

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
              <ConfirmAlert
                confirmMessage="정말 삭제하시겠습니까?"
                confirmTitle="삭제"
                onConfirm={() => console.log('confirm')}
              >
                <BaseButton variant="amber">Delete</BaseButton>
              </ConfirmAlert>
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
