import FocusableSearchInputText from '@/shared/ui/search/FocusableSearchInputText';
import { SearchInputTextProps } from '@/shared/ui/search/SearchInputText';

const SearchInputTextExplore = (props: SearchInputTextProps) => {
  return (
    <div className="border-mono500 rounded-md border w-full">
      <FocusableSearchInputText {...props} />
    </div>
  );
};

export default SearchInputTextExplore;
