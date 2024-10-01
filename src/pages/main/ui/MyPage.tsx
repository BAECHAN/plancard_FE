import { LogoutButton } from '@/features/auth';
import { getBoardData } from '@/shared/api';
import { modalOpenAtom } from '@/shared/store';
import UserEditModal from '@/widgets/modal/ui/UserEditModal';
import { UserCardListLayout } from '@/widgets/userCardList/ui';
import { useRecoilState } from 'recoil';

export const MyPage = () => {
  const handleButtonClick = async () => {
    const response = await getBoardData();
    console.log(response);
  };

  const [modalOpen, setModalOpen] = useRecoilState(modalOpenAtom);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>My Page</h1>
      <p>This is My Page.</p>

      <div className="flex flex-col gap-4">
        <LogoutButton />
        <button onClick={handleButtonClick}>보드데이터가져오기 </button>
        <UserCardListLayout />
        <UserEditModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
        >
          <div>Modal Content</div>
        </UserEditModal>
      </div>
    </div>
  );
};
