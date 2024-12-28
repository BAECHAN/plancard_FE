import { Size } from '@/shared/type';
import { BaseButton, SearchInputTextExplore } from '@/shared/ui';
import { Util } from '@/shared/util';

const SearchContainerExplore = ({ size = 'large' }: { size?: Size }) => {
  const buttonSize = Util.convertSizeToUpSize(size);

  return (
    <div className="explore-search-area flex items-center gap-2 px-1 py-2">
      <SearchInputTextExplore
        id="search"
        size={size}
        align="center"
        placeholder="Which country or city do you want to travel to?"
        onSearch={() => {}}
      />
      <BaseButton
        size={buttonSize}
        onClick={() => {}}
      >
        Search{' '}
      </BaseButton>
    </div>
  );
};

export default SearchContainerExplore;
