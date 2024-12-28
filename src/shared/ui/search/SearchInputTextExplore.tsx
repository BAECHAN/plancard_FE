import {
  exploreInputLarge as large,
  exploreInputMedium as medium,
  exploreInputSmall as small,
} from '@/shared/const';
import { Size } from '@/shared/type';
import FocusableSearchInputText from '@/shared/ui/search/FocusableSearchInputText';
import { SearchInputTextProps } from '@/shared/ui/search/SearchInputText';

const SearchInputTextExplore = (
  props: SearchInputTextProps & { size: Size },
) => {
  const { size } = props;

  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  return (
    <div className={`rounded-md border border-mono500 ${sizeClass[size]}`}>
      <FocusableSearchInputText {...props} />
    </div>
  );
};

export default SearchInputTextExplore;
