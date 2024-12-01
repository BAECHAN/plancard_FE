import { cn } from '@/shared/lib/shadcn-ui/lib/utils';
import { ReactNode } from 'react';

const TagList = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return <ul className={cn('flex', className)}>{children}</ul>;
};

export default TagList;
