import { BaseButton, SearchInputTextExplore } from '@/shared/ui';

const SearchContainerExplore = () => {
  return (
    <div className="card-explore-search-area flex items-center gap-2 py-2 px-1">
      <SearchInputTextExplore
        id="search"
        placeholder="Which country or city do you want to travel to?"
        onSearch={() => {}}
      />
      <BaseButton
        size="large"
        onClick={() => {}}
      >
        Search{' '}
      </BaseButton>
    </div>
  );
};

export default SearchContainerExplore;
