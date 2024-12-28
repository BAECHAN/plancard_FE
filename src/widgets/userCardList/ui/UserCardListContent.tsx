import { UserInfo } from '@/entities/user/type';
import { UserCard } from '@/entities/user/ui';
import { QueryStatusWrapper } from '@/shared/ui';
import { useUserListQuery } from '@/widgets/userCardList/query';
import { UseQueryResult } from '@tanstack/react-query';

const UserCardListContent = () => {
  const queryResult: UseQueryResult<UserInfo[], Error> = useUserListQuery();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <QueryStatusWrapper queryResult={queryResult}>
        {queryResult?.data?.map((user: UserInfo) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </QueryStatusWrapper>
    </div>
  );
};

export default UserCardListContent;
