import { cn } from '@/shared/lib/shadcn-ui/lib/utils';
import { ReactNode } from 'react';

const CardList = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <ul
      className={cn(
        'grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 p-5',
        className,
      )}
    >
      {children}
    </ul>
  );
};

export default CardList;
