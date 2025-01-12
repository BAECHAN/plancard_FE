import {
  exploreInputLarge as large,
  exploreInputMedium as medium,
  exploreInputSmall as small,
} from '@/shared/const';
import { useKeydown } from '@/shared/hooks';
import { Size } from '@/shared/type';
import Input from '@/shared/ui/input/Input';
import { memo, useRef } from 'react';

type SearchInputTextExploreProps = {
  id: string;
  query: string;
  placeholder: string;
  onSearch: (value: string) => void;
  type: 'text' | 'password';
  size: Size;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
};

const SearchInputTextExplore = memo(
  ({
    id,
    size = 'medium',
    query = '',
    placeholder,
    onSearch,
    type = 'text',
    onFocus,
    onBlur,
    onKeyDown,
  }: SearchInputTextExploreProps) => {
    const sizeClass: Record<Size, string> = {
      small,
      medium,
      large,
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onSearch(value);
    };

    const handleReset = () => {
      onSearch('');
    };

    const handleResetAndFocus = () => {
      handleReset();
      onFocus?.();
    };

    const searchInputRef = useRef<HTMLInputElement>(null);

    useKeydown('/', () => {
      searchInputRef.current?.focus();
    }); // '/' 키를 누르면 검색 입력창에 포커스

    useKeydown('Escape', handleResetAndFocus, searchInputRef);

    return (
      <div className={`rounded-md border border-mono500 ${sizeClass[size]}`}>
        <Input
          ref={searchInputRef}
          id={id}
          type={type}
          query={query}
          placeholder={placeholder}
          onChange={handleInputChange}
          onReset={handleReset}
          align="center"
          autoFocus
          autoComplete="off"
          spellCheck={false}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        />
      </div>
    );
  },
);

SearchInputTextExplore.displayName = 'SearchInputTextExplore';

export default SearchInputTextExplore;
