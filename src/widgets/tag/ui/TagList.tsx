import { ReactNode } from 'react';

const TagList = ({ children }: { children: ReactNode }) => {
  return <ul className="flex gap-3">{children}</ul>;
};

export default TagList;
