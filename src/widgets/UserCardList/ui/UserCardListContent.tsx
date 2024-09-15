import { UserCard, UserInfo } from '@/entities/user';
import { QueryStatusWrapper } from '@/shared/ui';
import { useUserListQuery } from '@/widgets/UserCardList';
import { UseQueryResult } from '@tanstack/react-query';

const UserCardListContent = () => {
  const queryResult: UseQueryResult<UserInfo[], Error> = useUserListQuery();

  return (
    <div className="flex justify-center gap-4 flex-col items-center">
      <QueryStatusWrapper queryResult={queryResult}>
        {queryResult.data?.map((user: UserInfo) => (
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
