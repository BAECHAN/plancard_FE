import { ReactNode } from 'react';

const SortingTitleButtonList = ({ children }: { children: ReactNode }) => {
  return <ul className="flex">{children}</ul>;
};

export default SortingTitleButtonList;
