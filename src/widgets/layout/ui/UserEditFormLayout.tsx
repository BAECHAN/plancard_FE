import { UserEditForm } from '@/features/user';

const UserEditFormLayout = (props: { onSave: () => void }) => {
  return <UserEditForm {...props} />;
};
export default UserEditFormLayout;
