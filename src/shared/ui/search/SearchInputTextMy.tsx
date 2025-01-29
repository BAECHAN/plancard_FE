import {
  myInputLarge as large,
  myInputMedium as medium,
  myInputSmall as small,
} from '@/shared/const';
import { Size } from '@/shared/type';
import { FocusableSearchInputText, SearchInputTextProps } from '@/shared/ui';

const SearchInputTextMy = (props: SearchInputTextProps & { size: Size }) => {
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

export default SearchInputTextMy;
