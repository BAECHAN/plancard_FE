import { BaseButton, SearchInputTextExplore } from '@/shared/ui';

export const CardPage = () => {
  return (
    <div className="h-[1000px]">
      <div className="flex flex-col gap-2">
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
      </div>
    </div>
  );
};
