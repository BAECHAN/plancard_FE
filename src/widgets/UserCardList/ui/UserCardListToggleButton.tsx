import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import useUserListQuery from '../query/useUserListQuery';

const UserCardListToggleButton = ({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) => {
  const { isLoading, error } = useUserListQuery();

  return (
    <Button onClick={onClick}>
      데이터
      {isActive
        ? isLoading
          ? '가져오는중'
          : error
            ? '못가져옴'
            : '가져옴'
        : '가져오기'}
    </Button>
  );
};

export default UserCardListToggleButton;
