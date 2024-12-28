import {
  UserCardListContent,
  UserCardListToggleButton,
} from '@/widgets/userCardList/ui';
import { useState } from 'react';

const UserCardListLayout = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center gap-4">
      <UserCardListToggleButton
        isActive={active}
        onClick={() => setActive(prev => !prev)}
      />
      {active && <UserCardListContent />}
      {active && (
        <div className="flex justify-center">
          <p>카드를 클릭 하면 데이터를 수정할 수 있습니다.</p>
        </div>
      )}
    </div>
  );
};

export default UserCardListLayout;
