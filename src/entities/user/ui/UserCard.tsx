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
      className="border-gray-200 flex h-36 w-96 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border p-4"
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
