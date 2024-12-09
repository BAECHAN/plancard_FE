import { useDebounce } from '@/shared/hooks';

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

export type SearchInputTextProps = {
  id: string;
  onSearch: (query: string) => void;
  type?: 'text' | 'password';
  initialValue?: string;
  placeholder?: string;
  align?: 'left' | 'center' | 'right';
  label?: string;
};

const SearchInputText = forwardRef<HTMLInputElement, SearchInputTextProps>(
  (
    {
      id,
      initialValue = '',
      onSearch,
      label = '',
      placeholder = '',
      align = 'left',
      type = 'text',
    },
    ref,
  ) => {
    const [query, setQuery] = useState<string>(initialValue);

    const searchInputTextStyle = `block w-full h-full pl-2 ${query.length ? 'pr-10' : 'pr-2'} py-2 border rounded-lg focus:outline-none border-gray-300`;

    const searchInputRef = useRef<HTMLInputElement>(null);

    const debouncedQuery = useDebounce(query, 700);

    useImperativeHandle(ref, () => searchInputRef.current!);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
      e.preventDefault();

      const inputValue = e.target.value;
      const normalizedValue = inputValue.normalize('NFC');
      setQuery(normalizedValue);
    };

    const handleQueryReset = () => {
      setQuery('');
      searchInputRef.current?.focus();
    };

    useEffect(() => {
      onSearch(encodeURIComponent(debouncedQuery));
    }, [debouncedQuery, onSearch]);

    return (
      <label
        htmlFor={id}
        className="relative"
      >
        {label}
        <input
          ref={searchInputRef}
          type={type}
          id={id}
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          spellCheck="false"
          className={`${searchInputTextStyle} text-${align}`}
          autoComplete="off"
        />
        {query.length > 0 && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-mono500 hover:text-black"
            onClick={() => handleQueryReset()}
          >
            ✕
          </button>
        )}
      </label>
    );
  },
);

SearchInputText.displayName = 'InputText';

export default SearchInputText;
