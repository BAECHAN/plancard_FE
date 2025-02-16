import { PanelLeftClose, PanelRightOpen } from '@/shared/ui';

const SidebarToggleButton = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <button
      onClick={toggle}
      className="h-fit rounded-md p-2 hover:bg-mono300"
      aria-label={`사이드바 ${isOpen ? '닫기' : '열기'}`}
    >
      {isOpen ? <PanelLeftClose /> : <PanelRightOpen />}
    </button>
  );
};

export default SidebarToggleButton;
