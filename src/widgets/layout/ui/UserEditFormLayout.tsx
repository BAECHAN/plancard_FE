import { UserEditForm } from '@/features/user/ui';

const UserEditFormLayout = (props: { onSave: () => void }) => {
  return <UserEditForm {...props} />;
};
export default UserEditFormLayout;
