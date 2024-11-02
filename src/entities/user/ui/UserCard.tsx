import { UserInfo } from '@/entities/user/type/UserType';
import { modalOpenAtom } from '@/shared/store';
import { modalUserInfoDataAtom } from '@/shared/store/atom';
import { PencilIcon } from '@/shared/ui';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

const UserCard = ({ user }: { user: UserInfo }) => {
  const { id, name, age, email } = user;

  const setModalOpen = useSetRecoilState(modalOpenAtom);

  const setModalData = useSetRecoilState(modalUserInfoDataAtom);

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEditModalOpen = () => {
    setModalData(user);
    setModalOpen(true);
  };

  return (
    <div
      className="flex justify-center flex-col gap-1 items-center p-4 border border-gray-200 rounded-md w-96 h-36 cursor-pointer"
      key={id}
      onMouseEnter={() => setIsEdit(true)}
      onMouseLeave={() => setIsEdit(false)}
      onClick={() => isEdit && handleEditModalOpen()}
    >
      {isEdit ? (
        <PencilIcon />
      ) : (
        <>
          <strong>{name}</strong>
          <p>{age}</p>
          <p>{email}</p>
        </>
      )}
    </div>
  );
};
export default UserCard;
