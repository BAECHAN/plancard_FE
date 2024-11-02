import { UserInfo } from '@/entities/user';
import { updateUserInfo } from '@/features/user';
import { queryClient, queryKeys } from '@/shared/query';
import { useMutation } from '@tanstack/react-query';

const updateUser = async (userForm: UserInfo): Promise<any> => {
  const data = await updateUserInfo(userForm);
  return data;
};

const useUpdateUserMutation = () => {
  return useMutation({
    mutationFn: (userForm: UserInfo) => {
      return updateUser(userForm);
    },
    onSuccess: () => {
      // Do something on success
      queryClient.invalidateQueries({ queryKey: [queryKeys.userList] });
    },
  });
};

export default useUpdateUserMutation;
