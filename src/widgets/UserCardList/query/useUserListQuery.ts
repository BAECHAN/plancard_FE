import { UserInfo } from '@/entities/user';
import { queryKeys } from '@/shared/query';
import { getUserList } from '@/widgets/UserCardList';
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
