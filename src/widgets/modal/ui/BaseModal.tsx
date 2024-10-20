import Modal from 'react-modal';

Modal.setAppElement('body'); // 모달이 열린 상태에서도 접근성을 보장하기 위해 필요합니다.

export type BaseModalProps = {
  isOpen: boolean; // 모달의 열림 상태를 결정합니다.
  onRequestClose: () => void; // 모달을 닫으려고 할 때 호출되는 콜백 함수입니다. 사용자가 모달 외부를 클릭하거나 ESC 키를 누를 때 호출됩니다.
  children: React.ReactNode;

  onAfterOpen?: () => void; // 모달이 열린 후 호출되는 콜백 함수입니다.
  shouldCloseOnOverlayClick?: boolean; // 모달 외부를 클릭했을 때 모달을 닫을지 여부를 결정합니다. 기본값은 true입니다.
  shouldCloseOnEsc?: boolean; // ESC 키를 눌렀을 때 모달을 닫을지 여부를 결정합니다. 기본값은 true입니다.
  contentLabel?: string; // 스크린리더 사용자에게 콘텐츠를 전달할 때
  closeTimeoutMS?: number; // 모달이 닫히는 데 걸리는 시간을 설정합니다. 기본값은 0입니다.
};

const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onRequestClose,
  contentLabel = 'Modal',
  children,
  onAfterOpen,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={{
        overlay: {
          backgroundColor: '#D8D8D8',
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
          width: '92vw',
          height: '95vh',
        },
      }}
    >
      <button
        onClick={onRequestClose}
        style={{ float: 'right', cursor: 'pointer' }}
      >
        &times;
      </button>
      {children}
    </Modal>
  );
};

export default BaseModal;
