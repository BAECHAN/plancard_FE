import { flexCenter } from '@/shared/const';
import { useKeydown } from '@/shared/hooks';
import { useModalStore } from '@/shared/store';
import { ESCButton } from '@/shared/ui';
import Modal from 'react-modal';

export type BaseModalProps = {
  children: React.ReactNode;

  width?: string; // 모달의 너비를 설정합니다.
  height?: string; // 모달의 높이를 설정합니다

  onAfterOpen?: () => void; // 모달이 열린 후 호출되는 콜백 함수입니다.
  onAfterClose?: () => void; // 모달이 닫힌 후 호출되는 콜백 함수입니다.
  shouldCloseOnOverlayClick?: boolean; // 모달 외부를 클릭했을 때 모달을 닫을지 여부를 결정합니다. 기본값은 true입니다.
  shouldCloseOnEsc?: boolean; // ESC 키를 눌렀을 때 모달을 닫을지 여부를 결정합니다. 기본값은 true입니다.
  contentLabel?: string; // 스크린리더 사용자에게 콘텐츠를 전달할 때
  closeTimeoutMS?: number; // 모달이 닫히는 데 걸리는 시간을 설정합니다. 기본값은 0입니다.
};

const BaseModal: React.FC<BaseModalProps> = ({
  contentLabel = 'Modal',
  children,
  width = '92vw',
  height = '95vh',
  onAfterOpen,
  onAfterClose,
}) => {
  const { isModalOpen, closeModal } = useModalStore();

  useKeydown('Escape', closeModal);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      contentLabel={contentLabel}
      style={{
        overlay: {
          backgroundColor: 'rgba(216, 216, 216, 0.7)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          width,
          height,
          gap: '20px',
        },
      }}
    >
      <div className="modal-header flex justify-end">
        <ESCButton onClick={closeModal} />
      </div>
      <div className={`modal-content flex-1 ${flexCenter} `}>{children}</div>
    </Modal>
  );
};

export default BaseModal;
