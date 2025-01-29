import { SizeWithXSmall } from '@/shared/type';
import { IconButton } from '@/shared/ui';
import { Util } from '@/shared/util';
import { FaCopy, FaRegCopy } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const ClipboardCopyButton = ({
  size = 'medium',
  copyText,
}: {
  size: SizeWithXSmall;
  copyText: string;
}) => {
  const handleClipboardCopyButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
    copyText: string,
  ) => {
    e.stopPropagation();

    const success = await Util.copyToClipboard(copyText);

    if (success) {
      toast.success('클립보드에 복사되었습니다.', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('복사하기를 실패했습니다.', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <IconButton
      size={size}
      onClick={e => handleClipboardCopyButtonClick(e, copyText)}
      IconComponent={FaRegCopy}
      HoverIconComponent={FaCopy}
      alt="복사 아이콘"
    />
  );
};

export default ClipboardCopyButton;
