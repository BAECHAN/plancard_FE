import { useDebounce, useInput } from '@/shared/hooks';
import Input from '@/shared/ui/input/Input';
import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';

export type SearchInputTextProps = {
  id: string;
  onSearch: (query: string) => void;
  type?: 'text' | 'password';
  defaultValue?: string;
  placeholder?: string;
  align?: 'left' | 'center' | 'right';
  label?: string;
  shouldEncode?: boolean;
  debounceTime?: number;
};

const SearchInputText = memo(
  forwardRef<HTMLInputElement, SearchInputTextProps>(
    (
      {
        id,
        defaultValue = '',
        onSearch,
        label = '',
        placeholder = '',
        align = 'left',
        type = 'text',
        shouldEncode = true,
        debounceTime = 700,
      },
      ref,
    ) => {
      const {
        value: query,
        onChange: onChangeQuery,
        onReset: onResetQuery,
        ref: searchInputRef,
      } = useInput(defaultValue);

      const debouncedQuery = useDebounce(query, debounceTime);

      useImperativeHandle(ref, () => searchInputRef.current!);

      const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          e.stopPropagation();
          e.preventDefault();

          const inputValue = e.target.value;
          const normalizedValue = inputValue.normalize('NFC');
          onChangeQuery(normalizedValue);
        },
        [onChangeQuery],
      );

      const handleQueryReset = useCallback(() => {
        onResetQuery();
        searchInputRef.current?.focus();
      }, [onResetQuery]);

      useEffect(() => {
        onSearch(
          shouldEncode ? encodeURIComponent(debouncedQuery) : debouncedQuery,
        );
        onChangeQuery(debouncedQuery);
      }, [debouncedQuery, shouldEncode, onSearch]);

      return (
        <Input
          id={id}
          type={type}
          query={query}
          label={label}
          align={align}
          onChange={handleInputChange}
          onReset={handleQueryReset}
          placeholder={placeholder}
          spellCheck={false}
          autoComplete="off"
          autoFocus
        />
      );
    },
  ),
);

SearchInputText.displayName = 'InputText';

export default SearchInputText;
