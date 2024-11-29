import { Size } from '@/shared/type';
import { BaseButton, SearchInputTextMy } from '@/shared/ui';

const SearchContainerMy = ({ size = 'medium' }: { size?: Size }) => {
  return (
    <div className="my-search-area flex items-center gap-2 py-2 px-1">
      <SearchInputTextMy
        id="search"
        size={size}
        placeholder="Please enter your search term."
        onSearch={() => {}}
      />
      <BaseButton
        size={size}
        onClick={() => {}}
      >
        Search{' '}
      </BaseButton>
    </div>
  );
};

export default SearchContainerMy;
