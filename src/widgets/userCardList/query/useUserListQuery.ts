import { UserInfo } from '@/entities/user/type';
import { queryKeys } from '@/shared/query';
import { getUserList } from '@/widgets/userCardList/api';
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async (): Promise<UserInfo[]> => {
  const { data } = await getUserList();
  return data;
};

const useUserListQuery = () => {
  return useQuery({
    queryKey: [queryKeys.userList],
    queryFn: () => fetchUsers(),
    staleTime: 5 * 1000,
  });
};

export default useUserListQuery;
